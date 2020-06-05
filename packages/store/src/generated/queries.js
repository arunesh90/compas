// Generated by @lbu/code-gen at 2020-06-05T12:22:49.419Z
/* eslint-disable no-unused-vars */

import { isNil, uuid } from "@lbu/stdlib";

export const storeQueries = {
  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @return {Promise<StoreFileStore[]>}
   */
  fileStoreSelect: (
    sql,
    where,
  ) => sql`SELECT fs.id as "id", fs.bucket_name as "bucketName", fs.content_length as "contentLength", fs.content_type as "contentType", fs.filename as "filename", fs.created_at as "createdAt", fs.updated_at as "updatedAt" FROM file_store fs 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
    where.id
  }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
    where.idIn
  })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
    where.bucketName
  }) AND (COALESCE(${
    where.bucketNameLike
  }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
`,

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @return {Promise<number>}
   */
  fileStoreCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as gen_count FROM file_store fs 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
      where.id
    }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
      where.idIn
    })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
      where.bucketName
    }) AND (COALESCE(${
      where.bucketNameLike
    }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
`;
    return result?.[0]?.gen_count ?? 0;
  },

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @return {Promise<*[]>}
   */
  fileStoreDelete: (sql, where) => sql`DELETE FROM file_store fs 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
    where.id
  }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
    where.idIn
  })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
    where.bucketName
  }) AND (COALESCE(${
    where.bucketNameLike
  }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
`,

  /**
   * @param sql
   * @param { StoreFileStoreInsertPartial_Input|StoreFileStoreInsertPartial_Input[]} insert
   * @return {Promise<StoreFileStore[]>}
   */
  fileStoreInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    const input = [];
    for (const it of data) {
      input.push({
        bucket_name: it.bucketName ?? undefined,
        content_length: it.contentLength ?? undefined,
        content_type: it.contentType ?? undefined,
        filename: it.filename ?? undefined,
        created_at: it.createdAt ?? new Date(),
        updated_at: it.updatedAt ?? new Date(),
      });
    }
    return sql`INSERT INTO file_store ${sql(
      input,
      "bucket_name",
      "content_length",
      "content_type",
      "filename",
      "created_at",
      "updated_at",
    )} RETURNING id as "id", bucket_name as "bucketName", content_length as "contentLength", content_type as "contentType", filename as "filename", created_at as "createdAt", updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreFileStoreInsertPartial_Input} value
   * @param { StoreFileStoreWhere} where
   * @return {Promise<StoreFileStore[]>}
   */
  fileStoreUpdate: async (sql, value, where) => {
    const updateValue = {};
    if (!isNil(value["bucketName"])) {
      updateValue["bucket_name"] = value["bucketName"];
    }
    if (!isNil(value["contentLength"])) {
      updateValue["content_length"] = value["contentLength"];
    }
    if (!isNil(value["contentType"])) {
      updateValue["content_type"] = value["contentType"];
    }
    if (!isNil(value["filename"])) {
      updateValue["filename"] = value["filename"];
    }
    if (!isNil(value["createdAt"])) {
      updateValue["created_at"] = value["createdAt"];
    }
    if (!isNil(value["updatedAt"])) {
      updateValue["updated_at"] = value["updatedAt"];
    }
    updateValue.updated_at = new Date();
    await sql`INSERT INTO file_store_history (file_store_id, bucket_name, content_length, content_type, filename, created_at)
SELECT id, bucket_name, content_length, content_type, filename, COALESCE(updated_at, created_at, now()) FROM file_store fs 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
      where.id
    }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
      where.idIn
    })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
      where.bucketName
    }) AND (COALESCE(${
      where.bucketNameLike
    }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
`;
    return sql`UPDATE file_store fs set ${sql(
      updateValue,
      ...Object.keys(updateValue),
    )} 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
      where.id
    }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
      where.idIn
    })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
      where.bucketName
    }) AND (COALESCE(${
      where.bucketNameLike
    }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
RETURNING fs.id as "id", fs.bucket_name as "bucketName", fs.content_length as "contentLength", fs.content_type as "contentType", fs.filename as "filename", fs.created_at as "createdAt", fs.updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @return {Promise<(StoreFileStore & (history: StoreFileStore[]))[]>}
   */
  fileStoreSelectHistory: (
    sql,
    where,
  ) => sql`SELECT fs.id as "id", fs.bucket_name as "bucketName", fs.content_length as "contentLength", fs.content_type as "contentType", fs.filename as "filename", fs.created_at as "createdAt", fs.updated_at as "updatedAt", array_agg(fsh.*) as history FROM file_store fs LEFT JOIN file_store_history fsh ON fs.id = fsh.file_store_id 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR fs.id = ${
    where.id
  }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR fs.id IN (${
    where.idIn
  })) AND (COALESCE(${where.bucketName}, NULL) IS NULL OR fs.bucket_name = ${
    where.bucketName
  }) AND (COALESCE(${
    where.bucketNameLike
  }, NULL) IS NULL OR fs.bucket_name LIKE ${"%" + where.bucketNameLike + "%"})
GROUP BY fs.id`,

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @return {Promise<StoreSessionStore[]>}
   */
  sessionStoreSelect: (
    sql,
    where,
  ) => sql`SELECT ss.id as "id", ss.expires as "expires", ss.data as "data", ss.created_at as "createdAt", ss.updated_at as "updatedAt" FROM session_store ss 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR ss.id = ${where.id}) AND (COALESCE(${where.idIn}, NULL) IS NULL OR ss.id IN (${where.idIn})) AND (COALESCE(${where.expires}, NULL) IS NULL OR ss.expires = ${where.expires}) AND (COALESCE(${where.expiresGreaterThan}, NULL) IS NULL OR ss.expires > ${where.expiresGreaterThan}) AND (COALESCE(${where.expiresLowerThan}, NULL) IS NULL OR ss.expires < ${where.expiresLowerThan})
`,

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @return {Promise<number>}
   */
  sessionStoreCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as gen_count FROM session_store ss 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR ss.id = ${where.id}) AND (COALESCE(${where.idIn}, NULL) IS NULL OR ss.id IN (${where.idIn})) AND (COALESCE(${where.expires}, NULL) IS NULL OR ss.expires = ${where.expires}) AND (COALESCE(${where.expiresGreaterThan}, NULL) IS NULL OR ss.expires > ${where.expiresGreaterThan}) AND (COALESCE(${where.expiresLowerThan}, NULL) IS NULL OR ss.expires < ${where.expiresLowerThan})
`;
    return result?.[0]?.gen_count ?? 0;
  },

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @return {Promise<*[]>}
   */
  sessionStoreDelete: (sql, where) => sql`DELETE FROM session_store ss 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR ss.id = ${where.id}) AND (COALESCE(${where.idIn}, NULL) IS NULL OR ss.id IN (${where.idIn})) AND (COALESCE(${where.expires}, NULL) IS NULL OR ss.expires = ${where.expires}) AND (COALESCE(${where.expiresGreaterThan}, NULL) IS NULL OR ss.expires > ${where.expiresGreaterThan}) AND (COALESCE(${where.expiresLowerThan}, NULL) IS NULL OR ss.expires < ${where.expiresLowerThan})
`,

  /**
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input|StoreSessionStoreInsertPartial_Input[]} insert
   * @return {Promise<StoreSessionStore[]>}
   */
  sessionStoreInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    const input = [];
    for (const it of data) {
      input.push({
        expires: it.expires ?? undefined,
        data: JSON.stringify(it.data ?? {}),
        created_at: it.createdAt ?? new Date(),
        updated_at: it.updatedAt ?? new Date(),
      });
    }
    return sql`INSERT INTO session_store ${sql(
      input,
      "expires",
      "data",
      "created_at",
      "updated_at",
    )} RETURNING id as "id", expires as "expires", data as "data", created_at as "createdAt", updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input} value
   * @param { StoreSessionStoreWhere} where
   * @return {Promise<StoreSessionStore[]>}
   */
  sessionStoreUpdate: (sql, value, where) => {
    const updateValue = {};
    if (!isNil(value["expires"])) {
      updateValue["expires"] = value["expires"];
    }
    if (!isNil(value["data"])) {
      updateValue["data"] = value["data"];
    }
    if (!isNil(value["createdAt"])) {
      updateValue["created_at"] = value["createdAt"];
    }
    if (!isNil(value["updatedAt"])) {
      updateValue["updated_at"] = value["updatedAt"];
    }
    updateValue.updated_at = new Date();
    return sql`UPDATE session_store ss set ${sql(
      updateValue,
      ...Object.keys(updateValue),
    )} 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR ss.id = ${
      where.id
    }) AND (COALESCE(${where.idIn}, NULL) IS NULL OR ss.id IN (${
      where.idIn
    })) AND (COALESCE(${where.expires}, NULL) IS NULL OR ss.expires = ${
      where.expires
    }) AND (COALESCE(${
      where.expiresGreaterThan
    }, NULL) IS NULL OR ss.expires > ${
      where.expiresGreaterThan
    }) AND (COALESCE(${where.expiresLowerThan}, NULL) IS NULL OR ss.expires < ${
      where.expiresLowerThan
    })
RETURNING ss.id as "id", ss.expires as "expires", ss.data as "data", ss.created_at as "createdAt", ss.updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input & { id?: string } } it
   * @return {Promise<StoreSessionStore[]>}
   */
  sessionStoreUpsert: (sql, it) => {
    const data = {
      expires: it.expires ?? undefined,
      data: JSON.stringify(it.data ?? {}),
      created_at: it.createdAt ?? new Date(),
      updated_at: it.updatedAt ?? new Date(),
    };
    data.id = it.id || uuid();
    return sql`INSERT INTO session_store ${sql(
      data,
      "id",
      "expires",
      "data",
      "created_at",
      "updated_at",
    )} ON CONFLICT (id) DO UPDATE SET ${sql(
      data,
      "expires",
      "data",
      "created_at",
      "updated_at",
    )} RETURNING id as "id", expires as "expires", data as "data", created_at as "createdAt", updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @return {Promise<StoreJobQueue[]>}
   */
  jobQueueSelect: (
    sql,
    where,
  ) => sql`SELECT jq.id as "id", jq.is_complete as "isComplete", jq.priority as "priority", jq.scheduled_at as "scheduledAt", jq.name as "name", jq.data as "data", jq.created_at as "createdAt", jq.updated_at as "updatedAt" FROM job_queue jq 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR jq.id = ${
    where.id
  }) AND (COALESCE(${where.idGreaterThan}, NULL) IS NULL OR jq.id > ${
    where.idGreaterThan
  }) AND (COALESCE(${where.idLowerThan}, NULL) IS NULL OR jq.id < ${
    where.idLowerThan
  }) AND (COALESCE(${where.name}, NULL) IS NULL OR jq.name = ${
    where.name
  }) AND (COALESCE(${where.nameLike}, NULL) IS NULL OR jq.name LIKE ${
    "%" + where.nameLike + "%"
  })
`,

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @return {Promise<number>}
   */
  jobQueueCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as gen_count FROM job_queue jq 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR jq.id = ${
      where.id
    }) AND (COALESCE(${where.idGreaterThan}, NULL) IS NULL OR jq.id > ${
      where.idGreaterThan
    }) AND (COALESCE(${where.idLowerThan}, NULL) IS NULL OR jq.id < ${
      where.idLowerThan
    }) AND (COALESCE(${where.name}, NULL) IS NULL OR jq.name = ${
      where.name
    }) AND (COALESCE(${where.nameLike}, NULL) IS NULL OR jq.name LIKE ${
      "%" + where.nameLike + "%"
    })
`;
    return result?.[0]?.gen_count ?? 0;
  },

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @return {Promise<*[]>}
   */
  jobQueueDelete: (sql, where) => sql`DELETE FROM job_queue jq 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR jq.id = ${
    where.id
  }) AND (COALESCE(${where.idGreaterThan}, NULL) IS NULL OR jq.id > ${
    where.idGreaterThan
  }) AND (COALESCE(${where.idLowerThan}, NULL) IS NULL OR jq.id < ${
    where.idLowerThan
  }) AND (COALESCE(${where.name}, NULL) IS NULL OR jq.name = ${
    where.name
  }) AND (COALESCE(${where.nameLike}, NULL) IS NULL OR jq.name LIKE ${
    "%" + where.nameLike + "%"
  })
`,

  /**
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input|StoreJobQueueInsertPartial_Input[]} insert
   * @return {Promise<StoreJobQueue[]>}
   */
  jobQueueInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    const input = [];
    for (const it of data) {
      input.push({
        is_complete: it.isComplete ?? false,
        priority: it.priority ?? 0,
        scheduled_at: it.scheduledAt ?? new Date(),
        name: it.name ?? undefined,
        data: JSON.stringify(it.data ?? {}),
        created_at: it.createdAt ?? new Date(),
        updated_at: it.updatedAt ?? new Date(),
      });
    }
    return sql`INSERT INTO job_queue ${sql(
      input,
      "is_complete",
      "priority",
      "scheduled_at",
      "name",
      "data",
      "created_at",
      "updated_at",
    )} RETURNING id as "id", is_complete as "isComplete", priority as "priority", scheduled_at as "scheduledAt", name as "name", data as "data", created_at as "createdAt", updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input} value
   * @param { StoreJobQueueWhere} where
   * @return {Promise<StoreJobQueue[]>}
   */
  jobQueueUpdate: (sql, value, where) => {
    const updateValue = {};
    if (!isNil(value["isComplete"])) {
      updateValue["is_complete"] = value["isComplete"];
    }
    if (!isNil(value["priority"])) {
      updateValue["priority"] = value["priority"];
    }
    if (!isNil(value["scheduledAt"])) {
      updateValue["scheduled_at"] = value["scheduledAt"];
    }
    if (!isNil(value["name"])) {
      updateValue["name"] = value["name"];
    }
    if (!isNil(value["data"])) {
      updateValue["data"] = value["data"];
    }
    if (!isNil(value["createdAt"])) {
      updateValue["created_at"] = value["createdAt"];
    }
    if (!isNil(value["updatedAt"])) {
      updateValue["updated_at"] = value["updatedAt"];
    }
    updateValue.updated_at = new Date();
    return sql`UPDATE job_queue jq set ${sql(
      updateValue,
      ...Object.keys(updateValue),
    )} 
WHERE (COALESCE(${where.id}, NULL) IS NULL OR jq.id = ${
      where.id
    }) AND (COALESCE(${where.idGreaterThan}, NULL) IS NULL OR jq.id > ${
      where.idGreaterThan
    }) AND (COALESCE(${where.idLowerThan}, NULL) IS NULL OR jq.id < ${
      where.idLowerThan
    }) AND (COALESCE(${where.name}, NULL) IS NULL OR jq.name = ${
      where.name
    }) AND (COALESCE(${where.nameLike}, NULL) IS NULL OR jq.name LIKE ${
      "%" + where.nameLike + "%"
    })
RETURNING jq.id as "id", jq.is_complete as "isComplete", jq.priority as "priority", jq.scheduled_at as "scheduledAt", jq.name as "name", jq.data as "data", jq.created_at as "createdAt", jq.updated_at as "updatedAt"`;
  },

  /**
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input & { id?: number } } it
   * @return {Promise<StoreJobQueue[]>}
   */
  jobQueueUpsert: (sql, it) => {
    const data = {
      is_complete: it.isComplete ?? false,
      priority: it.priority ?? 0,
      scheduled_at: it.scheduledAt ?? new Date(),
      name: it.name ?? undefined,
      data: JSON.stringify(it.data ?? {}),
      created_at: it.createdAt ?? new Date(),
      updated_at: it.updatedAt ?? new Date(),
    };
    data.id = it.id || uuid();
    return sql`INSERT INTO job_queue ${sql(
      data,
      "id",
      "is_complete",
      "priority",
      "scheduled_at",
      "name",
      "data",
      "created_at",
      "updated_at",
    )} ON CONFLICT (id) DO UPDATE SET ${sql(
      data,
      "is_complete",
      "priority",
      "scheduled_at",
      "name",
      "data",
      "created_at",
      "updated_at",
    )} RETURNING id as "id", is_complete as "isComplete", priority as "priority", scheduled_at as "scheduledAt", name as "name", data as "data", created_at as "createdAt", updated_at as "updatedAt"`;
  },
};
