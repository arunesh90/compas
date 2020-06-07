// Generated by @lbu/code-gen at 2020-06-07T17:30:55.646Z
/* eslint-disable no-unused-vars, jsdoc/valid-types, jsdoc/require-returns-description, jsdoc/no-undefined-types, jsdoc/require-property-description */

/**
 * @name StoreFileStore
 *
 * @typedef { { id:string, bucketName:string, contentLength:number, contentType:string, filename:string, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreFileStore_Input
 *
 * @typedef { { id:string, bucketName:string, contentLength:number, contentType:string, filename:string, createdAt?:string, updatedAt?:string, }}
 */

/**
 * @name StoreSessionStore
 *
 * @typedef { { id:string, expires:Date, data:*, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreSessionStore_Input
 *
 * @typedef { { id:string, expires:string, data?:* , createdAt?:string, updatedAt?:string, }}
 */

/**
 * @name StoreJobQueue
 *
 * @typedef { { id:number, isComplete:boolean, priority:number, scheduledAt:Date, name:string, data:*, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreJobQueue_Input
 *
 * @typedef { { id:number, isComplete?:boolean , priority?:number , scheduledAt?:string, name:string, data?:* , createdAt?:string, updatedAt?:string, }}
 */

/**
 * @name StoreFileStoreWhere
 *
 * @typedef { { id?:string, idIn?:(string)[] , bucketName?:string , bucketNameLike?:string , }}
 */

/**
 * @name StoreFileStoreWhere_Input
 *
 * @typedef { StoreFileStoreWhere}
 */

/**
 * @name StoreFileStoreInsertPartial
 *
 * @typedef { { bucketName:string, contentLength:number, contentType:string, filename:string, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreFileStoreInsertPartial_Input
 *
 * @typedef { { bucketName:string, contentLength:number, contentType:string, filename:string, createdAt?:string, updatedAt?:string, }}
 */

/**
 * @name StoreSessionStoreWhere
 *
 * @typedef { { id?:string, idIn?:(string)[] , expires?:Date, expiresGreaterThan?:Date, expiresLowerThan?:Date, }}
 */

/**
 * @name StoreSessionStoreWhere_Input
 *
 * @typedef { { id?:string, idIn?:(string)[] , expires?:string, expiresGreaterThan?:string, expiresLowerThan?:string, }}
 */

/**
 * @name StoreSessionStoreInsertPartial
 *
 * @typedef { { expires:Date, data:*, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreSessionStoreInsertPartial_Input
 *
 * @typedef { { expires:string, data?:* , createdAt?:string, updatedAt?:string, }}
 */

/**
 * @name StoreJobQueueWhere
 *
 * @typedef { { id?:number , idGreaterThan?:number , idLowerThan?:number , name?:string , nameLike?:string , }}
 */

/**
 * @name StoreJobQueueWhere_Input
 *
 * @typedef { StoreJobQueueWhere}
 */

/**
 * @name StoreJobQueueInsertPartial
 *
 * @typedef { { isComplete:boolean, priority:number, scheduledAt:Date, name:string, data:*, createdAt:Date, updatedAt:Date, }}
 */

/**
 * @name StoreJobQueueInsertPartial_Input
 *
 * @typedef { { isComplete?:boolean , priority?:number , scheduledAt?:string, name:string, data?:* , createdAt?:string, updatedAt?:string, }}
 */
