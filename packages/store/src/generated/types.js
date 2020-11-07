// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

// An export soo all things work correctly with linters, ts, ...
export const __generated__ = true;
/**
 * @name StoreFile
 * @typedef {{"bucketName": string, "contentLength": number, "contentType": string, "name": string, "meta": StoreFileMeta, "id": string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileMeta
 * User definable, optional object to store whatever you want
 * @typedef {{}}
 */
/**
 * @name StoreFileGroup
 * @typedef {{"name"?: string, "order": number, "meta": StoreFileGroupMeta, "id": string, "file"?: string, "parent"?: string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupMeta
 * User definable, optional object to store whatever you want
 * @typedef {StoreFileMeta}
 */
/**
 * @name StoreFileGroupView
 * @typedef {{"name"?: string, "order": number, "meta": StoreFileGroupMeta, "isDirectory": boolean, "id": string, "file"?: string, "parent"?: string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreJob
 * @typedef {{"id": number, "isComplete": boolean, "priority": number, "scheduledAt": Date, "name": string, "data": *, "createdAt": Date, "updatedAt": Date, }}
 */
/**
 * @name StoreJobInterval
 * @typedef {{"years"?: number, "months"?: number, "days"?: number, "hours"?: number, "minutes"?: number, "seconds"?: number, }}
 */
/**
 * @name StoreSession
 * @typedef {{"expires": Date, "data": *, "id": string, "createdAt": Date, "updatedAt": Date, }}
 */
/**
 * @name StoreFileWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[]|QueryPart, "idNotIn"?: (string)[]|QueryPart, "idLike"?: string, "idNotLike"?: string, "bucketName"?: string, "bucketNameNotEqual"?: string, "bucketNameIn"?: (string)[]|QueryPart, "bucketNameNotIn"?: (string)[]|QueryPart, "bucketNameLike"?: string, "bucketNameNotLike"?: string, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[]|QueryPart, "createdAtNotIn"?: (Date)[]|QueryPart, "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[]|QueryPart, "updatedAtNotIn"?: (Date)[]|QueryPart, "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[]|QueryPart, "deletedAtNotIn"?: (Date)[]|QueryPart, "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreFileGroupWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[]|QueryPart, "idNotIn"?: (string)[]|QueryPart, "idLike"?: string, "idNotLike"?: string, "file"?: string, "fileNotEqual"?: string, "fileIn"?: (string)[]|QueryPart, "fileNotIn"?: (string)[]|QueryPart, "fileLike"?: string, "fileNotLike"?: string, "fileIsNull"?: boolean, "fileIsNotNull"?: boolean, "parent"?: string, "parentNotEqual"?: string, "parentIn"?: (string)[]|QueryPart, "parentNotIn"?: (string)[]|QueryPart, "parentLike"?: string, "parentNotLike"?: string, "parentIsNull"?: boolean, "parentIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[]|QueryPart, "createdAtNotIn"?: (Date)[]|QueryPart, "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[]|QueryPart, "updatedAtNotIn"?: (Date)[]|QueryPart, "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[]|QueryPart, "deletedAtNotIn"?: (Date)[]|QueryPart, "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreFileGroupViewWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[]|QueryPart, "idNotIn"?: (string)[]|QueryPart, "idLike"?: string, "idNotLike"?: string, "isDirectory"?: boolean, "file"?: string, "fileNotEqual"?: string, "fileIn"?: (string)[]|QueryPart, "fileNotIn"?: (string)[]|QueryPart, "fileLike"?: string, "fileNotLike"?: string, "fileIsNull"?: boolean, "fileIsNotNull"?: boolean, "parent"?: string, "parentNotEqual"?: string, "parentIn"?: (string)[]|QueryPart, "parentNotIn"?: (string)[]|QueryPart, "parentLike"?: string, "parentNotLike"?: string, "parentIsNull"?: boolean, "parentIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[]|QueryPart, "createdAtNotIn"?: (Date)[]|QueryPart, "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[]|QueryPart, "updatedAtNotIn"?: (Date)[]|QueryPart, "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[]|QueryPart, "deletedAtNotIn"?: (Date)[]|QueryPart, "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreJobWhere
 * @typedef {{"id"?: number, "idNotEqual"?: number, "idIn"?: (number)[]|QueryPart, "idNotIn"?: (number)[]|QueryPart, "idGreaterThan"?: number, "idLowerThan"?: number, "isComplete"?: boolean, "isCompleteIsNull"?: boolean, "isCompleteIsNotNull"?: boolean, "name"?: string, "nameNotEqual"?: string, "nameIn"?: (string)[]|QueryPart, "nameNotIn"?: (string)[]|QueryPart, "nameLike"?: string, "nameNotLike"?: string, "scheduledAt"?: Date, "scheduledAtNotEqual"?: Date, "scheduledAtIn"?: (Date)[]|QueryPart, "scheduledAtNotIn"?: (Date)[]|QueryPart, "scheduledAtGreaterThan"?: Date, "scheduledAtLowerThan"?: Date, "scheduledAtIsNull"?: boolean, "scheduledAtIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[]|QueryPart, "createdAtNotIn"?: (Date)[]|QueryPart, "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[]|QueryPart, "updatedAtNotIn"?: (Date)[]|QueryPart, "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, }}
 */
/**
 * @name StoreSessionWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[]|QueryPart, "idNotIn"?: (string)[]|QueryPart, "idLike"?: string, "idNotLike"?: string, "expires"?: Date, "expiresNotEqual"?: Date, "expiresIn"?: (Date)[]|QueryPart, "expiresNotIn"?: (Date)[]|QueryPart, "expiresGreaterThan"?: Date, "expiresLowerThan"?: Date, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[]|QueryPart, "createdAtNotIn"?: (Date)[]|QueryPart, "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[]|QueryPart, "updatedAtNotIn"?: (Date)[]|QueryPart, "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, }}
 */
/**
 * @name StoreFileInsertPartial
 * @typedef {{"id"?: string, "contentLength": number, "bucketName": string, "contentType": string, "name": string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileUpdatePartial
 * @typedef {{"contentLength"?: number, "bucketName"?: string, "contentType"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupInsertPartial
 * @typedef {{"id"?: string, "order"?: number, "file"?: string, "parent"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupUpdatePartial
 * @typedef {{"order"?: number, "file"?: string, "parent"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreJobInsertPartial
 * @typedef {{"id"?: number, "isComplete"?: boolean, "priority"?: number, "name": string, "scheduledAt"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreJobUpdatePartial
 * @typedef {{"isComplete"?: boolean, "priority"?: number, "name"?: string, "scheduledAt"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreSessionInsertPartial
 * @typedef {{"id"?: string, "expires": Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreSessionUpdatePartial
 * @typedef {{"expires"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
