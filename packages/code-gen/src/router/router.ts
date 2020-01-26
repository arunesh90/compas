import { Route, RoutePrio, RouteTrie } from "../types";
import { lowerCaseFirst, upperCaseFirst } from "../util";

export function createRouterSource(routes: Route[], trie: RouteTrie): string {
  const types = routes.map(it => createTypes(it)).join("\n");
  const externalHandlers = createExternalHandlers(routes);
  const internalHandlers = createInternalHandlers(routes);
  const routeFn = buildRouter(trie);

  return [getHeader(), types, externalHandlers, internalHandlers, routeFn].join(
    "\n",
  );
}

function getHeader(): string {
  return `
// @lbu/code-gen
// GENERATED FILE DO NOT EDIT

import Koa from "koa";
import { AppState, Context, bodyParser } from "@lbu/koa";
import * as validators from "./validators";

const bodyInstance = bodyParser({
      jsonLimit: 5 * 1024 * 1024, // 5mb
      multipart: true,
    });
const wrappedBodyParser = (ctx: Context) => new Promise(r => bodyInstance(ctx, r as Koa.Next).then(r));

export function mountRouter(app: Koa<AppState>) {
  app.use(routeFn);
}
`;
}

function createTypes({
  name,
  method,
  queryValidator,
  bodyValidator,
  paramsValidator,
  path,
}: Route): string {
  const src = [];
  src.push("/**");
  src.push(` * Type for ${name}`);
  src.push(` * ${method} ${path}`);
  src.push(` */`);
  src.push(`export type ${upperCaseFirst(name)} = {`);

  if (queryValidator) {
    const validator = `validators.validate${queryValidator.name}`;
    src.push(`validatedQuery: ReturnType<typeof ${validator}>;`);
  }
  if (paramsValidator) {
    const validator = `validators.validate${paramsValidator.name}`;
    src.push(`validatedParams: ReturnType<typeof ${validator}>;`);
  }
  if (bodyValidator) {
    const validator = `validators.validate${bodyValidator.name}`;
    src.push(`validatedBody: ReturnType<typeof ${validator}>;`);
  }

  src.push("}");

  return src.join("\n");
}

function createInternalHandlers(routes: Route[]): string {
  const src = [`const handlers = {`];

  for (const r of routes) {
    src.push(
      `${lowerCaseFirst(
        r.name,
      )}: async (params: any, ctx: Context & ${upperCaseFirst(
        r.name,
      )}, next: Koa.Next) => {`,
    );
    src.push(`// @ts-ignore`);
    src.push(`ctx.request.params = params;`);

    if (r.paramsValidator) {
      src.push(
        `ctx.validatedParams = validators.validate${r.paramsValidator.name}(params);`,
      );
    }

    if (r.bodyValidator || r.queryValidator) {
      src.push(`await wrappedBodyParser(ctx);`);
    }

    if (r.bodyValidator) {
      src.push(
        `ctx.validatedBody = validators.validate${r.bodyValidator.name}(ctx.request.body);`,
      );
    }
    if (r.queryValidator) {
      src.push(
        `ctx.validatedQuery = validators.validate${r.queryValidator.name}(ctx.request.query);`,
      );
    }

    src.push(`return routeHandlers.${lowerCaseFirst(r.name)}(ctx, next);`);

    src.push("},");
  }

  src.push("};");
  return src.join("\n");
}

function createExternalHandlers(routes: Route[]): string {
  const src = [`export const routeHandlers = {`];

  for (const r of routes) {
    src.push("/**");
    src.push(` * ${r.method} ${r.path}`);
    src.push(` */`);
    src.push(
      `${lowerCaseFirst(r.name)}: async (ctx: Context & ${upperCaseFirst(
        r.name,
      )}, next: Koa.Next) => { return next(); },`,
    );
  }

  src.push("};");
  return src.join("\n");
}

type Context = {
  routerFunctions: string[];
  nextFn(): string;
};

function buildRouter(trie: RouteTrie): string {
  let idx = 0;
  const ctx: Context = {
    routerFunctions: [],
    nextFn(): string {
      return `routeFn${idx++}`;
    },
  };

  const src = [
    `
async function routeFn(ctx: Context, next: Koa.Next) {
  let triePath = ctx.method + ctx.path;
  if (triePath.endsWith("/")) {
    triePath = triePath.substring(0, triePath.length - 1);
  }
  const params: any = {};
  let route: any = undefined;
`,
  ];

  const fns = trie.children.map(it => createRouteFn(ctx, it));

  for (const fn of fns) {
    src.push(`route = ${fn}(triePath, params, 0);`);
    src.push(`if (route !== undefined) {`);
    src.push(`return route(params, ctx, next);`);
    src.push(`}`);
  }

  src.push(`return next();`);
  src.push(`}`);

  return src.join("\n") + "\n" + ctx.routerFunctions.join("\n");
}

// have a match
function createRouteFn(ctx: Context, trie: RouteTrie): string {
  const name = ctx.nextFn();
  const src = [];
  src.push(`function ${name}(path: string, params: any, currentIdx: number) {`);

  if (trie.prio === RoutePrio.STATIC) {
    src.push(`if (!path.startsWith("${trie.path}", currentIdx)) {`);
    src.push(`return undefined;`);
    src.push(`}`);

    if (trie.handler !== undefined && trie.children.length === 0) {
      src.push(`return handlers.${lowerCaseFirst(trie.handler.name)};`);
    } else {
      src.push(`const nextIdx = currentIdx + 1 + ${trie.path.length};`);
      src.push(`let handler: any = undefined;`);

      const fns = trie.children.map(it => createRouteFn(ctx, it));

      for (const fn of fns) {
        src.push(`handler = ${fn}(path, params, nextIdx);`);
        src.push(`if (handler !== undefined) {`);
        src.push(`return handler;`);
        src.push(`}`);
      }

      if (trie.handler !== undefined) {
        // Only if path is correct match
        src.push(`if (path.length === nextIdx -1) {`);
        src.push(`return handlers.${lowerCaseFirst(trie.handler.name)};`);
        src.push(`}`);
      } else {
        src.push(`return undefined;`);
      }
    }
  } else if (trie.prio === RoutePrio.PARAM) {
    const paramName = trie.path.substring(1);
    src.push(`let subIdx = path.indexOf("/", currentIdx);`);
    src.push(`if (subIdx === -1) { subIdx = path.length; }`);
    src.push(`const subPath = path.substring(currentIdx, subIdx);`);

    if (trie.handler !== undefined && trie.children.length === 0) {
      src.push(`params["${paramName}"] = subPath`);
      src.push(`return handlers.${lowerCaseFirst(trie.handler.name)};`);
    } else {
      src.push(`const nextIdx = subIdx + 1;`);
      src.push(`let handler: any = undefined;`);

      const fns = trie.children.map(it => createRouteFn(ctx, it));

      for (const fn of fns) {
        src.push(`handler = ${fn}(path, params, nextIdx);`);
        src.push(`if (handler !== undefined) {`);
        src.push(`params["${paramName}"] = subPath`);
        src.push(`return handler;`);
        src.push(`}`);
      }

      if (trie.handler !== undefined) {
        src.push(`params["${paramName}"] = subPath`);
        src.push(`return handlers.${lowerCaseFirst(trie.handler.name)};`);
      } else {
        src.push(`return undefined;`);
      }
    }
  } else if (trie.prio === RoutePrio.WILDCARD && trie.handler !== undefined) {
    src.push(`return handlers.${lowerCaseFirst(trie.handler.name)};`);
  }

  src.push("}");

  ctx.routerFunctions.push(src.join("\n"));

  return name;
}
