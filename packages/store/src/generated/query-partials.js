// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

import { query } from "@lbu/store";
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
 * Build 'WHERE ' part for file
 * @param {StoreFileWhere} [where={}]
 * @param {string} [tableName="f."]
 * @returns {QueryPart}
 */
export function fileWhere(where = {}, tableName = "f.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = ["1 = 1"];
  const values = [undefined];
  if (where.id !== undefined) {
    strings.push(` AND ${tableName}"id" = `);
    values.push(where.id);
  }
  if (where.idNotEqual !== undefined) {
    strings.push(` AND ${tableName}"id" != `);
    values.push(where.idNotEqual);
  }
  if (where.idIn !== undefined) {
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
  if (where.idNotIn !== undefined) {
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
  if (where.bucketNameNotIn !== undefined) {
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
  if (where.bucketNameLike !== undefined) {
    strings.push(` AND ${tableName}"bucketName" LIKE `);
    values.push(`%${where.bucketNameLike}%`);
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
    strings.push(` AND ${tableName}"createdAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtIn.length; ++i) {
      values.push(where.createdAtIn[i]);
      if (i === where.createdAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.createdAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"createdAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtNotIn.length; ++i) {
      values.push(where.createdAtNotIn[i]);
      if (i === where.createdAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
    strings.push(` AND ${tableName}"updatedAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtIn.length; ++i) {
      values.push(where.updatedAtIn[i]);
      if (i === where.updatedAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.updatedAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtNotIn.length; ++i) {
      values.push(where.updatedAtNotIn[i]);
      if (i === where.updatedAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
    strings.push(` AND ${tableName}"deletedAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.deletedAtIn.length; ++i) {
      values.push(where.deletedAtIn[i]);
      if (i === where.deletedAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.deletedAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"deletedAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.deletedAtNotIn.length; ++i) {
      values.push(where.deletedAtNotIn[i]);
      if (i === where.deletedAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
    strings.push(` AND ${tableName}"deletedAt" IS NULL `);
    values.push(undefined);
  }
  strings.push("");
  return query(strings, ...values);
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
 * Get all fields for job
 * @param {string} [tableName="j."]
 * @param {{ excludePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function jobFields(tableName = "j.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"isComplete", ${tableName}"priority", ${tableName}"name", ${tableName}"scheduledAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"isComplete", ${tableName}"priority", ${tableName}"name", ${tableName}"scheduledAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
  ]);
}
/**
 * Build 'WHERE ' part for job
 * @param {StoreJobWhere} [where={}]
 * @param {string} [tableName="j."]
 * @returns {QueryPart}
 */
export function jobWhere(where = {}, tableName = "j.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = ["1 = 1"];
  const values = [undefined];
  if (where.id !== undefined) {
    strings.push(` AND ${tableName}"id" = `);
    values.push(where.id);
  }
  if (where.idNotEqual !== undefined) {
    strings.push(` AND ${tableName}"id" != `);
    values.push(where.idNotEqual);
  }
  if (where.idIn !== undefined) {
    strings.push(` AND ${tableName}"id" = ANY(ARRAY[`);
    for (let i = 0; i < where.idIn.length; ++i) {
      values.push(where.idIn[i]);
      if (i === where.idIn.length - 1) {
        strings.push("]::int[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.idNotIn !== undefined) {
    strings.push(` AND ${tableName}"id" != ANY(ARRAY[`);
    for (let i = 0; i < where.idNotIn.length; ++i) {
      values.push(where.idNotIn[i]);
      if (i === where.idNotIn.length - 1) {
        strings.push("]::int[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.idGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"id" > `);
    values.push(where.idGreaterThan);
  }
  if (where.idLowerThan !== undefined) {
    strings.push(` AND ${tableName}"id" < `);
    values.push(where.idLowerThan);
  }
  if (where.isComplete !== undefined) {
    strings.push(` AND ${tableName}"isComplete" = `);
    values.push(where.isComplete);
  }
  if (where.isCompleteIsNull !== undefined) {
    strings.push(` AND ${tableName}"isComplete" IS NULL `);
    values.push(undefined);
  }
  if (where.isCompleteIsNotNull !== undefined) {
    strings.push(` AND ${tableName}"isComplete" IS NOT NULL `);
    values.push(undefined);
  }
  if (where.name !== undefined) {
    strings.push(` AND ${tableName}"name" = `);
    values.push(where.name);
  }
  if (where.nameNotEqual !== undefined) {
    strings.push(` AND ${tableName}"name" != `);
    values.push(where.nameNotEqual);
  }
  if (where.nameIn !== undefined) {
    strings.push(` AND ${tableName}"name" = ANY(ARRAY[`);
    for (let i = 0; i < where.nameIn.length; ++i) {
      values.push(where.nameIn[i]);
      if (i === where.nameIn.length - 1) {
        strings.push("]::varchar[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.nameNotIn !== undefined) {
    strings.push(` AND ${tableName}"name" != ANY(ARRAY[`);
    for (let i = 0; i < where.nameNotIn.length; ++i) {
      values.push(where.nameNotIn[i]);
      if (i === where.nameNotIn.length - 1) {
        strings.push("]::varchar[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.nameLike !== undefined) {
    strings.push(` AND ${tableName}"name" LIKE `);
    values.push(`%${where.nameLike}%`);
  }
  if (where.nameNotLike !== undefined) {
    strings.push(` AND ${tableName}"name" NOT LIKE `);
    values.push(`%${where.nameNotLike}%`);
  }
  if (where.scheduledAt !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" = `);
    values.push(where.scheduledAt);
  }
  if (where.scheduledAtNotEqual !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" != `);
    values.push(where.scheduledAtNotEqual);
  }
  if (where.scheduledAtIn !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.scheduledAtIn.length; ++i) {
      values.push(where.scheduledAtIn[i]);
      if (i === where.scheduledAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.scheduledAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.scheduledAtNotIn.length; ++i) {
      values.push(where.scheduledAtNotIn[i]);
      if (i === where.scheduledAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.scheduledAtGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" > `);
    values.push(where.scheduledAtGreaterThan);
  }
  if (where.scheduledAtLowerThan !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" < `);
    values.push(where.scheduledAtLowerThan);
  }
  if (where.scheduledAtIsNull !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" IS NULL `);
    values.push(undefined);
  }
  if (where.scheduledAtIsNotNull !== undefined) {
    strings.push(` AND ${tableName}"scheduledAt" IS NOT NULL `);
    values.push(undefined);
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
    strings.push(` AND ${tableName}"createdAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtIn.length; ++i) {
      values.push(where.createdAtIn[i]);
      if (i === where.createdAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.createdAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"createdAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtNotIn.length; ++i) {
      values.push(where.createdAtNotIn[i]);
      if (i === where.createdAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
    strings.push(` AND ${tableName}"updatedAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtIn.length; ++i) {
      values.push(where.updatedAtIn[i]);
      if (i === where.updatedAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.updatedAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtNotIn.length; ++i) {
      values.push(where.updatedAtNotIn[i]);
      if (i === where.updatedAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
  strings.push("");
  return query(strings, ...values);
}
/**
 * Get 'ORDER BY ' for job
 * @param {string} [tableName="j."]
 * @returns {QueryPart}
 */
export function jobOrderBy(tableName = "j.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = [
    `${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"id" `,
  ];
  return query(strings);
}
/**
 * Build 'VALUES ' part for job
 * @param {StoreJobInsertPartial|StoreJobInsertPartial[]} insert
 * @param {{ includePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function jobInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const q = query``;
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    q.append(query`(
${options?.includePrimaryKey ? query`${it.id}, ` : undefined}
${it.isComplete ?? false}, ${it.priority ?? 0}, ${it.name ?? null}, ${
      it.scheduledAt ?? new Date()
    }, ${JSON.stringify(it.data ?? {})}, ${it.createdAt ?? new Date()}, ${
      it.updatedAt ?? new Date()
    }
)`);
    if (i !== insert.length - 1) {
      q.append(query`, `);
    }
  }
  return q;
}
/**
 * Build 'SET ' part for job
 * @param {StoreJobUpdatePartial} update
 * @returns {QueryPart}
 */
export function jobUpdateSet(update) {
  const strings = [];
  const values = [];
  if (update.isComplete !== undefined) {
    strings.push(`, "isComplete" = `);
    values.push(update.isComplete ?? false);
  }
  if (update.priority !== undefined) {
    strings.push(`, "priority" = `);
    values.push(update.priority ?? 0);
  }
  if (update.name !== undefined) {
    strings.push(`, "name" = `);
    values.push(update.name ?? null);
  }
  if (update.scheduledAt !== undefined) {
    strings.push(`, "scheduledAt" = `);
    values.push(update.scheduledAt ?? new Date());
  }
  if (update.data !== undefined) {
    strings.push(`, "data" = `);
    values.push(JSON.stringify(update.data ?? {}));
  }
  if (update.createdAt !== undefined) {
    strings.push(`, "createdAt" = `);
    values.push(update.createdAt ?? new Date());
  }
  strings.push(`, "updatedAt" = `);
  values.push(new Date());
  // Remove the comma suffix
  strings[0] = strings[0].substring(2);
  strings.push("");
  return query(strings, ...values);
}
/**
 * Get all fields for session
 * @param {string} [tableName="s."]
 * @param {{ excludePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function sessionFields(tableName = "s.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"expires", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"expires", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
  ]);
}
/**
 * Build 'WHERE ' part for session
 * @param {StoreSessionWhere} [where={}]
 * @param {string} [tableName="s."]
 * @returns {QueryPart}
 */
export function sessionWhere(where = {}, tableName = "s.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = ["1 = 1"];
  const values = [undefined];
  if (where.id !== undefined) {
    strings.push(` AND ${tableName}"id" = `);
    values.push(where.id);
  }
  if (where.idNotEqual !== undefined) {
    strings.push(` AND ${tableName}"id" != `);
    values.push(where.idNotEqual);
  }
  if (where.idIn !== undefined) {
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
  if (where.idNotIn !== undefined) {
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
  if (where.idLike !== undefined) {
    strings.push(` AND ${tableName}"id" LIKE `);
    values.push(`%${where.idLike}%`);
  }
  if (where.idNotLike !== undefined) {
    strings.push(` AND ${tableName}"id" NOT LIKE `);
    values.push(`%${where.idNotLike}%`);
  }
  if (where.expires !== undefined) {
    strings.push(` AND ${tableName}"expires" = `);
    values.push(where.expires);
  }
  if (where.expiresNotEqual !== undefined) {
    strings.push(` AND ${tableName}"expires" != `);
    values.push(where.expiresNotEqual);
  }
  if (where.expiresIn !== undefined) {
    strings.push(` AND ${tableName}"expires" = ANY(ARRAY[`);
    for (let i = 0; i < where.expiresIn.length; ++i) {
      values.push(where.expiresIn[i]);
      if (i === where.expiresIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.expiresNotIn !== undefined) {
    strings.push(` AND ${tableName}"expires" != ANY(ARRAY[`);
    for (let i = 0; i < where.expiresNotIn.length; ++i) {
      values.push(where.expiresNotIn[i]);
      if (i === where.expiresNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.expiresGreaterThan !== undefined) {
    strings.push(` AND ${tableName}"expires" > `);
    values.push(where.expiresGreaterThan);
  }
  if (where.expiresLowerThan !== undefined) {
    strings.push(` AND ${tableName}"expires" < `);
    values.push(where.expiresLowerThan);
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
    strings.push(` AND ${tableName}"createdAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtIn.length; ++i) {
      values.push(where.createdAtIn[i]);
      if (i === where.createdAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.createdAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"createdAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.createdAtNotIn.length; ++i) {
      values.push(where.createdAtNotIn[i]);
      if (i === where.createdAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
    strings.push(` AND ${tableName}"updatedAt" = ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtIn.length; ++i) {
      values.push(where.updatedAtIn[i]);
      if (i === where.updatedAtIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
      }
    }
  }
  if (where.updatedAtNotIn !== undefined) {
    strings.push(` AND ${tableName}"updatedAt" != ANY(ARRAY[`);
    for (let i = 0; i < where.updatedAtNotIn.length; ++i) {
      values.push(where.updatedAtNotIn[i]);
      if (i === where.updatedAtNotIn.length - 1) {
        strings.push("]::uuid[])");
        values.push(undefined);
      } else {
        strings.push(", ");
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
  strings.push("");
  return query(strings, ...values);
}
/**
 * Get 'ORDER BY ' for session
 * @param {string} [tableName="s."]
 * @returns {QueryPart}
 */
export function sessionOrderBy(tableName = "s.") {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  const strings = [
    `${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"id" `,
  ];
  return query(strings);
}
/**
 * Build 'VALUES ' part for session
 * @param {StoreSessionInsertPartial|StoreSessionInsertPartial[]} insert
 * @param {{ includePrimaryKey: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function sessionInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const q = query``;
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    q.append(query`(
${options?.includePrimaryKey ? query`${it.id}, ` : undefined}
${it.expires ?? null}, ${JSON.stringify(it.data ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}
)`);
    if (i !== insert.length - 1) {
      q.append(query`, `);
    }
  }
  return q;
}
/**
 * Build 'SET ' part for session
 * @param {StoreSessionUpdatePartial} update
 * @returns {QueryPart}
 */
export function sessionUpdateSet(update) {
  const strings = [];
  const values = [];
  if (update.expires !== undefined) {
    strings.push(`, "expires" = `);
    values.push(update.expires ?? null);
  }
  if (update.data !== undefined) {
    strings.push(`, "data" = `);
    values.push(JSON.stringify(update.data ?? {}));
  }
  if (update.createdAt !== undefined) {
    strings.push(`, "createdAt" = `);
    values.push(update.createdAt ?? new Date());
  }
  strings.push(`, "updatedAt" = `);
  values.push(new Date());
  // Remove the comma suffix
  strings[0] = strings[0].substring(2);
  strings.push("");
  return query(strings, ...values);
}
