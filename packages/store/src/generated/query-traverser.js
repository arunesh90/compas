// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

import { query } from "@lbu/store";
import {
  fileFields,
  fileOrderBy,
  fileWhere,
  jobFields,
  jobOrderBy,
  jobWhere,
  sessionFields,
  sessionOrderBy,
  sessionWhere,
} from "./query-partials.js";
/**
 * @name TraverseFile
 * @typedef {object}
 * @property {QueryPart} queryPart
 * @property {function(sql: Postgres): Promise<StoreFile[]>} exec
 */
/**
 * @param {StoreFileWhere} [where={}]
 * @param {QueryPart|undefined} [queryPart]
 * @returns {TraverseFile}
 */
export function traverseFile(where = {}, queryPart) {
  const q = query`
FROM "file" f
WHERE ${fileWhere(where)}
${queryPart}
`;
  return {
    get queryPart() {
      return query`
SELECT ${fileFields()}
${q}
ORDER BY ${fileOrderBy()}
`;
    },
    exec(sql) {
      return query`
SELECT ${fileFields()}
${q}
ORDER BY ${fileOrderBy()}
`.exec(sql);
    },
  };
}
/**
 * @name TraverseJob
 * @typedef {object}
 * @property {QueryPart} queryPart
 * @property {function(sql: Postgres): Promise<StoreJob[]>} exec
 */
/**
 * @param {StoreJobWhere} [where={}]
 * @param {QueryPart|undefined} [queryPart]
 * @returns {TraverseJob}
 */
export function traverseJob(where = {}, queryPart) {
  const q = query`
FROM "job" j
WHERE ${jobWhere(where)}
${queryPart}
`;
  return {
    get queryPart() {
      return query`
SELECT ${jobFields()}
${q}
ORDER BY ${jobOrderBy()}
`;
    },
    exec(sql) {
      return query`
SELECT ${jobFields()}
${q}
ORDER BY ${jobOrderBy()}
`.exec(sql);
    },
  };
}
/**
 * @name TraverseSession
 * @typedef {object}
 * @property {QueryPart} queryPart
 * @property {function(sql: Postgres): Promise<StoreSession[]>} exec
 */
/**
 * @param {StoreSessionWhere} [where={}]
 * @param {QueryPart|undefined} [queryPart]
 * @returns {TraverseSession}
 */
export function traverseSession(where = {}, queryPart) {
  const q = query`
FROM "session" s
WHERE ${sessionWhere(where)}
${queryPart}
`;
  return {
    get queryPart() {
      return query`
SELECT ${sessionFields()}
${q}
ORDER BY ${sessionOrderBy()}
`;
    },
    exec(sql) {
      return query`
SELECT ${sessionFields()}
${q}
ORDER BY ${sessionOrderBy()}
`.exec(sql);
    },
  };
}