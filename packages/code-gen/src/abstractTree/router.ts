import { AppSchema, RoutePrio, RouteSchema } from "../fluent/types";
import { logger } from "../logger";
import { AbstractRoute, AbstractRouteTrie } from "../types";
import { lowerCaseFirst } from "../util";

export function extractRouteTrie(schema: AppSchema): AbstractRouteTrie {
  const abstractRoutes = convertToAbstractRoutes(schema.routes);
  const routeTrie = convertToAbstractRouteTrie(abstractRoutes);
  printAbstractRouteTrie(routeTrie);

  return routeTrie;
}

function convertToAbstractRoutes(routes: RouteSchema[]): AbstractRoute[] {
  const result: AbstractRoute[] = [];

  for (const route of routes) {
    let path = route.path;
    if (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (path.endsWith("/")) {
      path = path.substring(0, path.length - 2);
    }

    result.push({
      path,
      method: route.method,
      name: lowerCaseFirst(route.name),
      queryValidator: route.queryValidator
        ? {
            typeName: `QuerySchema${route.name}`,
            validatorName: `validateQuerySchema${route.name}`,
          }
        : undefined,
      paramsValidator: route.paramsValidator
        ? {
            typeName: `ParamsSchema${route.name}`,
            validatorName: `validateParamsSchema${route.name}`,
          }
        : undefined,
      bodyValidator: route.bodyValidator
        ? {
            typeName: `BodySchema${route.name}`,
            validatorName: `validateBodySchema${route.name}`,
          }
        : undefined,
      response: route.response
        ? {
            typeName: `ResponseSchema${route.name}`,
          }
        : undefined,
    });
  }

  return result;
}

export function convertToAbstractRouteTrie(
  routes: AbstractRoute[],
): AbstractRouteTrie {
  const trie: AbstractRouteTrie = createNode("", undefined);
  addHttpMethods(trie);

  for (const route of routes) {
    addRoute(trie, [route.method, ...route.path.split("/")], route);
  }

  // Don't collapse top level
  for (const child of trie.children) {
    cleanTrieAndCollapse(child);
  }

  // Remove unneeded 'HTTP-method' children
  trie.children = trie.children.filter(
    it => it.children.length > 0 || it.handler !== undefined,
  );

  sortTrie(trie);

  return trie;
}

function createNode(path: string, handler?: AbstractRoute): AbstractRouteTrie {
  let prio = RoutePrio.STATIC;
  if (path === "*") {
    prio = RoutePrio.WILDCARD;
  } else if (path.startsWith(":")) {
    prio = RoutePrio.PARAM;
  }

  return {
    children: [],
    prio,
    path,
    handler,
    parent: undefined,
  };
}

function addChildNodes(
  parent: AbstractRouteTrie,
  ...children: AbstractRouteTrie[]
) {
  for (const child of children) {
    child.parent = parent;
    parent.children.push(child);
  }
}

function addHttpMethods(trie: AbstractRouteTrie) {
  addChildNodes(
    trie,
    createNode("GET"),
    createNode("POST"),
    createNode("PUT"),
    createNode("DELETE"),
    createNode("HEAD"),
  );
}

function addRoute(
  trie: AbstractRouteTrie,
  path: string[],
  route: AbstractRoute,
) {
  const currentPath = path[0];

  let child = trie.children.find(it => it.path === currentPath);
  if (!child) {
    child = createNode(currentPath, undefined);
    if (trie.prio === RoutePrio.WILDCARD) {
      throw new Error("Can't have sub routes on wildcard routes.");
    }
    addChildNodes(trie, child);
  }

  if (path.length === 1) {
    child.handler = route;
  } else {
    addRoute(child, path.slice(1), route);
  }
}

function cleanTrieAndCollapse(trie: AbstractRouteTrie) {
  // Remove nodes without handler & without children
  trie.children = trie.children.filter(
    it => it.handler !== undefined || it.children.length > 0,
  );

  for (const child of trie.children) {
    cleanTrieAndCollapse(child);
  }

  if (trie.children.length > 0) {
    collapseStaticChildren(trie);
  }
}

function collapseStaticChildren(trie: AbstractRouteTrie) {
  if (trie.handler !== undefined || trie.parent === undefined) {
    return;
  }
  for (const child of trie.children) {
    if (child.prio !== RoutePrio.STATIC) {
      return;
    }
  }

  const parent = trie.parent;
  const path = trie.path;

  // delete latest reference
  parent.children = parent.children.filter(it => it !== trie);
  trie.parent = undefined;

  for (const child of trie.children) {
    child.path = `${path}/${child.path}`;
    addChildNodes(parent, child);
  }
}

function sortTrie(trie: AbstractRouteTrie) {
  trie.children = trie.children.sort((a, b) => {
    const result = a.prio - b.prio;

    if (result !== 0) {
      return result;
    }

    return b.path.length - a.path.length;
  });

  for (const child of trie.children) {
    sortTrie(child);
  }
}

export function printAbstractRouteTrie(
  trie: AbstractRouteTrie,
  prefix = "TRIE: ",
) {
  logger.info(prefix, `[${trie.prio}]`, trie.path);
  for (const child of trie.children) {
    printAbstractRouteTrie(child, prefix + "  ");
  }
}