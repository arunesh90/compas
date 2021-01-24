// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { AppError, isNil, isPlainObject, isStaging } from "@compas/stdlib";
import { isQueryPart, query } from "@compas/store";
import {
  validateStoreFileQueryBuilder,
  validateStoreFileWhere,
} from "../validators.js";
import {
  fileGroupDelete,
  fileGroupOrderBy,
  internalQueryFileGroup,
  transformFileGroup,
} from "./fileGroup.js";
import {
  fileGroupViewOrderBy,
  internalQueryFileGroupView,
  transformFileGroupView,
} from "./fileGroupView.js";

const fileFieldSet = new Set([
  "bucketName",
  "contentLength",
  "contentType",
  "name",
  "meta",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
]);
/**
 * Get all fields for file
 * @param {string} [tableName="f."]
 * @param {{ excludePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileFields(tableName = "f.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"contentLength", ${tableName}"bucketName", ${tableName}"contentType", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"deletedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"contentLength", ${tableName}"bucketName", ${tableName}"contentType", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"deletedAt"`,
  ]);
}
/**
 * Get 'ORDER BY ' for file
 * @param {string} [tableName="f."]
 * @returns {QueryPart}
 */
export function fileOrderBy(tableName = "f.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = [
    `${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"id" `,
  ];
  return query(strings);
}
/**
 * Build 'WHERE ' part for file
 * @param {StoreFileWhere} [where={}]
 * @param {string} [tableName="f."]
 * @param {{ skipValidator?: boolean }=} options
 * @returns {QueryPart}
 */
export function fileWhere(where = {}, tableName = "f.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    where = validateStoreFileWhere(where, "$.fileWhere");
  }
  const strings = ["1 = 1"];
  const values = [undefined];
  if (Array.isArray(where.$or) && where.$or.length > 0) {
    strings.push(" AND ((");
    for (let i = 0; i < where.$or.length; i++) {
      values.push(fileWhere(where.$or[i], tableName));
      if (i === where.$or.length - 1) {
        strings.push("))");
        values.push(undefined);
      } else {
        strings.push(") OR (");
      }
    }
  }
  if (where.id !== undefined) {
    strings.push(` AND ${tableName}"id" = `);
    values.push(where.id);
  }
  if (where.idNotEqual !== undefined) {
    strings.push(` AND ${tableName}"id" != `);
    values.push(where.idNotEqual);
  }
  if (where.idIn !== undefined) {
    if (isQueryPart(where.idIn)) {
      strings.push(` AND ${tableName}"id" = ANY(`, ")");
      values.push(where.idIn, undefined);
    } else if (Array.isArray(where.idIn) && where.idIn.length > 0) {
      strings.push(` AND ${tableName}"id" = ANY(ARRAY[`);
      for (let i = 0; i < where.idIn.length; ++i) {
        values.push(where.idIn[i]);
        if (i === where.idIn.length - 1) {
          strings.push("]::uuid[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.idNotIn !== undefined) {
    if (isQueryPart(where.idNotIn)) {
      strings.push(` AND ${tableName}"id" != ANY(`, ")");
      values.push(where.idNotIn, undefined);
    } else if (Array.isArray(where.idNotIn) && where.idNotIn.length > 0) {
      strings.push(` AND ${tableName}"id" != ANY(ARRAY[`);
      for (let i = 0; i < where.idNotIn.length; ++i) {
        values.push(where.idNotIn[i]);
        if (i === where.idNotIn.length - 1) {
          strings.push("]::uuid[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.idLike !== undefined) {
    strings.push(` AND ${tableName}"id" LIKE `);
    values.push(`%${where.idLike}%`);
  }
  if (where.idNotLike !== undefined) {
    strings.push(` AND ${tableName}"id" NOT LIKE `);
    values.push(`%${where.idNotLike}%`);
  }
  if (where.bucketName !== undefined) {
    strings.push(` AND ${tableName}"bucketName" = `);
    values.push(where.bucketName);
  }
  if (where.bucketNameNotEqual !== undefined) {
    strings.push(` AND ${tableName}"bucketName" != `);
    values.push(where.bucketNameNotEqual);
  }
  if (where.bucketNameIn !== undefined) {
    if (isQueryPart(where.bucketNameIn)) {
      strings.push(` AND ${tableName}"bucketName" = ANY(`, ")");
      values.push(where.bucketNameIn, undefined);
    } else if (
      Array.isArray(where.bucketNameIn) &&
      where.bucketNameIn.length > 0
    ) {
      strings.push(` AND ${tableName}"bucketName" = ANY(ARRAY[`);
      for (let i = 0; i < where.bucketNameIn.length; ++i) {
        values.push(where.bucketNameIn[i]);
        if (i === where.bucketNameIn.length - 1) {
          strings.push("]::varchar[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.bucketNameNotIn !== undefined) {
    if (isQueryPart(where.bucketNameNotIn)) {
      strings.push(` AND ${tableName}"bucketName" != ANY(`, ")");
      values.push(where.bucketNameNotIn, undefined);
    } else if (
      Array.isArray(where.bucketNameNotIn) &&
      where.bucketNameNotIn.length > 0
    ) {
      strings.push(` AND ${tableName}"bucketName" != ANY(ARRAY[`);
      for (let i = 0; i < where.bucketNameNotIn.length; ++i) {
        values.push(where.bucketNameNotIn[i]);
        if (i === where.bucketNameNotIn.length - 1) {
          strings.push("]::varchar[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.bucketNameLike !== undefined) {
    strings.push(` AND ${tableName}"bucketName" LIKE `);
    values.push(`%${where.bucketNameLike}%`);
  }
  if (where.bucketNameILike !== undefined) {
    strings.push(` AND ${tableName}"bucketName" ILIKE `);
    values.push(`%${where.bucketNameILike}%`);
  }
  if (where.bucketNameNotLike !== undefined) {
    strings.push(` AND ${tableName}"bucketName" NOT LIKE `);
    values.push(`%${where.bucketNameNotLike}%`);
  }
  if (where.createdAt !== undefined) {
    strings.push(` AND ${tableName}"createdAt" = `);
    values.push(where.createdAt);
  }
  if (where.createdAtNotEqual !== undefined) {
    strings.push(` AND ${tableName}"createdAt" != `);
    values.push(where.createdAtNotEqual);
  }
  if (where.createdAtIn !== undefined) {
    if (isQueryPart(where.createdAtIn)) {
      strings.push(` AND ${tableName}"createdAt" = ANY(`, ")");
      values.push(where.createdAtIn, undefined);
    } else if (
      Array.isArray(where.createdAtIn) &&
      where.createdAtIn.length > 0
    ) {
      strings.push(` AND ${tableName}"createdAt" = ANY(ARRAY[`);
      for (let i = 0; i < where.createdAtIn.length; ++i) {
        values.push(where.createdAtIn[i]);
        if (i === where.createdAtIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.createdAtNotIn !== undefined) {
    if (isQueryPart(where.createdAtNotIn)) {
      strings.push(` AND ${tableName}"createdAt" != ANY(`, ")");
      values.push(where.createdAtNotIn, undefined);
    } else if (
      Array.isArray(where.createdAtNotIn) &&
      where.createdAtNotIn.length > 0
    ) {
      strings.push(` AND ${tableName}"createdAt" != ANY(ARRAY[`);
      for (let i = 0; i < where.createdAtNotIn.length; ++i) {
        values.push(where.createdAtNotIn[i]);
        if (i === where.createdAtNotIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.createdAtGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"createdAt" > `);
    values.push(where.createdAtGreaterThan);
  }
  if (where.createdAtLowerThan !== undefined) {
    strings.push(` AND ${tableName}"createdAt" < `);
    values.push(where.createdAtLowerThan);
  }
  if (where.createdAtIsNull !== undefined) {
    strings.push(` AND ${tableName}"createdAt" IS NULL `);
    values.push(undefined);
  }
  if (where.createdAtIsNotNull !== undefined) {
    strings.push(` AND ${tableName}"createdAt" IS NOT NULL `);
    values.push(undefined);
  }
  if (where.updatedAt !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" = `);
    values.push(where.updatedAt);
  }
  if (where.updatedAtNotEqual !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" != `);
    values.push(where.updatedAtNotEqual);
  }
  if (where.updatedAtIn !== undefined) {
    if (isQueryPart(where.updatedAtIn)) {
      strings.push(` AND ${tableName}"updatedAt" = ANY(`, ")");
      values.push(where.updatedAtIn, undefined);
    } else if (
      Array.isArray(where.updatedAtIn) &&
      where.updatedAtIn.length > 0
    ) {
      strings.push(` AND ${tableName}"updatedAt" = ANY(ARRAY[`);
      for (let i = 0; i < where.updatedAtIn.length; ++i) {
        values.push(where.updatedAtIn[i]);
        if (i === where.updatedAtIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.updatedAtNotIn !== undefined) {
    if (isQueryPart(where.updatedAtNotIn)) {
      strings.push(` AND ${tableName}"updatedAt" != ANY(`, ")");
      values.push(where.updatedAtNotIn, undefined);
    } else if (
      Array.isArray(where.updatedAtNotIn) &&
      where.updatedAtNotIn.length > 0
    ) {
      strings.push(` AND ${tableName}"updatedAt" != ANY(ARRAY[`);
      for (let i = 0; i < where.updatedAtNotIn.length; ++i) {
        values.push(where.updatedAtNotIn[i]);
        if (i === where.updatedAtNotIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.updatedAtGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" > `);
    values.push(where.updatedAtGreaterThan);
  }
  if (where.updatedAtLowerThan !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" < `);
    values.push(where.updatedAtLowerThan);
  }
  if (where.updatedAtIsNull !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" IS NULL `);
    values.push(undefined);
  }
  if (where.updatedAtIsNotNull !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" IS NOT NULL `);
    values.push(undefined);
  }
  if (where.deletedAt !== undefined) {
    strings.push(` AND ${tableName}"deletedAt" = `);
    values.push(where.deletedAt);
  }
  if (where.deletedAtNotEqual !== undefined) {
    strings.push(` AND ${tableName}"deletedAt" != `);
    values.push(where.deletedAtNotEqual);
  }
  if (where.deletedAtIn !== undefined) {
    if (isQueryPart(where.deletedAtIn)) {
      strings.push(` AND ${tableName}"deletedAt" = ANY(`, ")");
      values.push(where.deletedAtIn, undefined);
    } else if (
      Array.isArray(where.deletedAtIn) &&
      where.deletedAtIn.length > 0
    ) {
      strings.push(` AND ${tableName}"deletedAt" = ANY(ARRAY[`);
      for (let i = 0; i < where.deletedAtIn.length; ++i) {
        values.push(where.deletedAtIn[i]);
        if (i === where.deletedAtIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.deletedAtNotIn !== undefined) {
    if (isQueryPart(where.deletedAtNotIn)) {
      strings.push(` AND ${tableName}"deletedAt" != ANY(`, ")");
      values.push(where.deletedAtNotIn, undefined);
    } else if (
      Array.isArray(where.deletedAtNotIn) &&
      where.deletedAtNotIn.length > 0
    ) {
      strings.push(` AND ${tableName}"deletedAt" != ANY(ARRAY[`);
      for (let i = 0; i < where.deletedAtNotIn.length; ++i) {
        values.push(where.deletedAtNotIn[i]);
        if (i === where.deletedAtNotIn.length - 1) {
          strings.push("]::timestamptz[])");
          values.push(undefined);
        } else {
          strings.push(", ");
        }
      }
    }
  }
  if (where.deletedAtGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"deletedAt" > `);
    values.push(where.deletedAtGreaterThan);
  }
  if (where.deletedAtLowerThan !== undefined) {
    strings.push(` AND ${tableName}"deletedAt" < `);
    values.push(where.deletedAtLowerThan);
  }
  if ((where.deletedAtIncludeNotNull ?? false) === false) {
    strings.push(
      ` AND (${tableName}"deletedAt" IS NULL OR ${tableName}"deletedAt" > now()) `,
    );
    values.push(undefined);
  }
  strings.push("");
  return query(strings, ...values);
}
/**
 * Build 'VALUES ' part for file
 * @param {StoreFileInsertPartial|StoreFileInsertPartial[]} insert
 * @param {{ includePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const q = query``;
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    checkFieldsInSet("file", "insert", fileFieldSet, it);
    q.append(query`(
${options?.includePrimaryKey ? query`${it.id}, ` : undefined}
${it.contentLength ?? null}, ${it.bucketName ?? null}, ${
      it.contentType ?? null
    }, ${it.name ?? null}, ${JSON.stringify(it.meta ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}, ${it.deletedAt ?? null}
)`);
    if (i !== insert.length - 1) {
      q.append(query`, `);
    }
  }
  return q;
}
/**
 * Build 'SET ' part for file
 * @param {StoreFileUpdatePartial} update
 * @returns {QueryPart}
 */
export function fileUpdateSet(update) {
  const strings = [];
  const values = [];
  checkFieldsInSet("file", "update", fileFieldSet, update);
  if (update.contentLength !== undefined) {
    strings.push(`, "contentLength" = `);
    values.push(update.contentLength ?? null);
  }
  if (update.bucketName !== undefined) {
    strings.push(`, "bucketName" = `);
    values.push(update.bucketName ?? null);
  }
  if (update.contentType !== undefined) {
    strings.push(`, "contentType" = `);
    values.push(update.contentType ?? null);
  }
  if (update.name !== undefined) {
    strings.push(`, "name" = `);
    values.push(update.name ?? null);
  }
  if (update.meta !== undefined) {
    strings.push(`, "meta" = `);
    values.push(JSON.stringify(update.meta ?? {}));
  }
  if (update.createdAt !== undefined) {
    strings.push(`, "createdAt" = `);
    values.push(update.createdAt ?? new Date());
  }
  strings.push(`, "updatedAt" = `);
  values.push(new Date());
  if (update.deletedAt !== undefined) {
    strings.push(`, "deletedAt" = `);
    values.push(update.deletedAt ?? null);
  }
  // Remove the comma suffix
  strings[0] = strings[0].substring(2);
  strings.push("");
  return query(strings, ...values);
}
/**
 * @param {string} entity
 * @param {string} subType
 * @param {Set} set
 * @param {*} value
 */
function checkFieldsInSet(entity, subType, set, value) {
  if (isStaging()) {
    for (const key of Object.keys(value)) {
      if (!set.has(key) && value[key] !== undefined) {
        throw new AppError(`query.${entity}.${subType}Fields`, 500, {
          extraKey: key,
          knownKeys: [...set],
        });
      }
    }
  }
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where]
 * @returns {Promise<StoreFile[]>}
 */
export async function fileSelect(sql, where) {
  const result = await query`
SELECT ${fileFields()}
FROM "file" f
WHERE ${fileWhere(where)}
ORDER BY ${fileOrderBy()}
`.exec(sql);
  transformFile(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where]
 * @returns {Promise<number>}
 */
export async function fileCount(sql, where) {
  const [result] = await query`
SELECT COUNT(f."id") as "countResult"
FROM "file" f
WHERE ${fileWhere(where)}
`.exec(sql);
  return Number(result?.countResult ?? "0");
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where={}]
 * @returns {Promise<void>}
 */
export function fileDeletePermanent(sql, where = {}) {
  where.deletedAtIncludeNotNull = true;
  return query`
DELETE FROM "file" f
WHERE ${fileWhere(where)}
`.exec(sql);
}
/**
 * @param {Postgres} sql
 * @param {StoreFileInsertPartial|(StoreFileInsertPartial[])} insert
 * @param {{ withPrimaryKey: boolean }=} options
 * @returns {Promise<StoreFile[]>}
 */
export async function fileInsert(sql, insert, options = {}) {
  if (insert === undefined || insert.length === 0) {
    return [];
  }
  options.withPrimaryKey = options.withPrimaryKey ?? false;
  const result = await query`
INSERT INTO "file" (${fileFields("", {
    excludePrimaryKey: !options.withPrimaryKey,
  })})
VALUES ${fileInsertValues(insert, {
    includePrimaryKey: options.withPrimaryKey,
  })}
RETURNING ${fileFields("")}
`.exec(sql);
  transformFile(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileUpdatePartial} update
 * @param {StoreFileWhere} [where={}]
 * @returns {Promise<StoreFile[]>}
 */
export async function fileUpdate(sql, update, where = {}) {
  const result = await query`
UPDATE "file" f
SET ${fileUpdateSet(update)}
WHERE ${fileWhere(where)}
RETURNING ${fileFields()}
`.exec(sql);
  transformFile(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where={}]
 * @param {{ skipCascade: boolean }} [options={}]
 * @returns {Promise<void>}
 */
export async function fileDelete(sql, where = {}, options = {}) {
  const result = await query`
UPDATE "file" f
SET "deletedAt" = now()
WHERE ${fileWhere(where)}
RETURNING "id"
`.exec(sql);
  if (options.skipCascade || result.length === 0) {
    return;
  }
  const ids = result.map((it) => it.id);
  await Promise.all([fileGroupDelete(sql, { fileIn: ids })]);
}
/**
 * @param {StoreFileQueryBuilder|StoreFileQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
export function internalQueryFile(builder = {}, wherePartial) {
  const joinQb = query``;
  if (builder.viaGroup) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaGroup.offset)
      ? query`OFFSET ${builder.viaGroup.offset}`
      : query``;
    if (!isNil(builder.viaGroup.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaGroup.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fg."file"
${internalQueryFileGroup(builder.viaGroup)}
${offsetLimitQb}
`;
  }
  if (builder.viaGroupView) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaGroupView.offset)
      ? query`OFFSET ${builder.viaGroupView.offset}`
      : query``;
    if (!isNil(builder.viaGroupView.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaGroupView.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fgv."file"
${internalQueryFileGroupView(builder.viaGroupView)}
${offsetLimitQb}
`;
  }
  if (builder.group) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.group.offset)
      ? query`OFFSET ${builder.group.offset}`
      : query``;
    if (!isNil(builder.group.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.group.limit} ROWS ONLY`);
    }
    if (builder.group.file) {
      joinedKeys.push(
        `'${builder.group.file?.as ?? "file"}'`,
        '"ljl_2"."result"',
      );
    }
    if (builder.group.parent) {
      joinedKeys.push(
        `'${builder.group.parent?.as ?? "parent"}'`,
        '"ljl_3"."result"',
      );
    }
    if (builder.group.children) {
      joinedKeys.push(
        `'${builder.group.children?.as ?? "children"}'`,
        '"ljl_4"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fg.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroup(builder.group, query`AND fg."file" = f."id"`)}
ORDER BY ${fileGroupOrderBy("fg.")}
${offsetLimitQb}
) as "ljl_0" ON TRUE`);
  }
  if (builder.groupView) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.groupView.offset)
      ? query`OFFSET ${builder.groupView.offset}`
      : query``;
    if (!isNil(builder.groupView.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.groupView.limit} ROWS ONLY`,
      );
    }
    if (builder.groupView.file) {
      joinedKeys.push(
        `'${builder.groupView.file?.as ?? "file"}'`,
        '"ljl_5"."result"',
      );
    }
    if (builder.groupView.parent) {
      joinedKeys.push(
        `'${builder.groupView.parent?.as ?? "parent"}'`,
        '"ljl_6"."result"',
      );
    }
    if (builder.groupView.children) {
      joinedKeys.push(
        `'${builder.groupView.children?.as ?? "children"}'`,
        '"ljl_7"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fgv.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroupView(builder.groupView, query`AND fgv."file" = f."id"`)}
ORDER BY ${fileGroupViewOrderBy("fgv.")}
${offsetLimitQb}
) as "ljl_1" ON TRUE`);
  }
  return query`
FROM "file" f
${joinQb}
WHERE ${fileWhere(builder.where, "f.", { skipValidator: true })} ${wherePartial}
`;
}
/**
 * @typedef {StoreFile} QueryResultStoreFile
 * @property {QueryResultStoreFileGroup|string|number} [group]
 * @property {QueryResultStoreFileGroupView|string|number} [groupView]
 */
/**
 * Query Builder for file
 * Note that nested limit and offset don't work yet.
 * @param {StoreFileQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<QueryResultStoreFile[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function queryFile(builder = {}) {
  const joinedKeys = [];
  validateStoreFileQueryBuilder(builder, "$.fileBuilder");
  if (builder.group) {
    joinedKeys.push(`'${builder.group?.as ?? "group"}'`, `"ljl_0"."result"`);
  }
  if (builder.groupView) {
    joinedKeys.push(
      `'${builder.groupView?.as ?? "groupView"}'`,
      `"ljl_1"."result"`,
    );
  }
  const qb = query`
SELECT to_jsonb(f.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQueryFile(builder)}
ORDER BY ${fileOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformFile(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'file' and its relations.
 * @param {*[]} values
 * @param {StoreFileQueryBuilder=} builder
 */
export function transformFile(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    value.deletedAt = value.deletedAt ?? undefined;
    if (typeof value.deletedAt === "string") {
      value.deletedAt = new Date(value.deletedAt);
    }
    value[builder.group?.as ?? "group"] =
      value[builder.group?.as ?? "group"] ?? undefined;
    if (isPlainObject(value[builder.group?.as ?? "group"])) {
      const arr = [value[builder.group?.as ?? "group"]];
      transformFileGroup(arr, builder.group);
      value[builder.group?.as ?? "group"] = arr[0];
    }
    value[builder.groupView?.as ?? "groupView"] =
      value[builder.groupView?.as ?? "groupView"] ?? undefined;
    if (isPlainObject(value[builder.groupView?.as ?? "groupView"])) {
      const arr = [value[builder.groupView?.as ?? "groupView"]];
      transformFileGroupView(arr, builder.groupView);
      value[builder.groupView?.as ?? "groupView"] = arr[0];
    }
  }
}