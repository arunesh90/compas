// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

import { uuid } from "@lbu/stdlib";

export const storeQueries = {
  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @returns {Promise<StoreFileStore[]>}
   */
  fileStoreSelect: (
    sql,
    where,
  ) => sql`SELECT fs."id", fs."bucketName", fs."contentLength", fs."contentType", fs."filename", fs."createdAt", fs."updatedAt" FROM "fileStore" fs 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR fs."id" = ${
    where.id ?? null
  }) AND (COALESCE(${
    where.idIn ?? null
  }, NULL) IS NULL OR fs."id" = ANY (${sql.array(
    where?.idIn ?? [],
  )}::uuid[])) AND (COALESCE(${
    where.bucketName ?? null
  }, NULL) IS NULL OR fs."bucketName" = ${
    where.bucketName ?? null
  }) AND (COALESCE(${
    where.bucketNameLike ?? null
  }, NULL) IS NULL OR fs."bucketName" LIKE ${"%" + where.bucketNameLike + "%"})
`,

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @returns {Promise<number>}
   */
  fileStoreCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as "genCount" FROM "fileStore" fs 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR fs."id" = ${
      where.id ?? null
    }) AND (COALESCE(${
      where.idIn ?? null
    }, NULL) IS NULL OR fs."id" = ANY (${sql.array(
      where?.idIn ?? [],
    )}::uuid[])) AND (COALESCE(${
      where.bucketName ?? null
    }, NULL) IS NULL OR fs."bucketName" = ${
      where.bucketName ?? null
    }) AND (COALESCE(${
      where.bucketNameLike ?? null
    }, NULL) IS NULL OR fs."bucketName" LIKE ${
      "%" + where.bucketNameLike + "%"
    })
`;
    return result?.[0]?.genCount ?? 0;
  },

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @returns {Promise<*[]>}
   */
  fileStoreDelete: (sql, where) => sql`DELETE FROM "fileStore" fs 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR fs."id" = ${
    where.id ?? null
  }) AND (COALESCE(${
    where.idIn ?? null
  }, NULL) IS NULL OR fs."id" = ANY (${sql.array(
    where?.idIn ?? [],
  )}::uuid[])) AND (COALESCE(${
    where.bucketName ?? null
  }, NULL) IS NULL OR fs."bucketName" = ${
    where.bucketName ?? null
  }) AND (COALESCE(${
    where.bucketNameLike ?? null
  }, NULL) IS NULL OR fs."bucketName" LIKE ${"%" + where.bucketNameLike + "%"})
`,

  /**
   * @param sql
   * @param { StoreFileStoreInsertPartial_Input|StoreFileStoreInsertPartial_Input[]} insert
   * @returns {Promise<StoreFileStore[]>}
   */
  fileStoreInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    if (data.length === 0) {
      return [];
    }
    let query = `INSERT INTO "fileStore" ("bucketName", "contentLength", "contentType", "filename", "createdAt", "updatedAt") VALUES `;
    const argList = [];
    let idx = 1;
    for (const it of data) {
      argList.push(
        it.bucketName ?? null,
        it.contentLength ?? null,
        it.contentType ?? null,
        it.filename ?? null,
        it.createdAt ?? new Date(),
        it.updatedAt ?? new Date(),
      );
      query += `($${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}),`;
    }
    // Remove trailing comma
    query = query.substring(0, query.length - 1);
    query += ` RETURNING "id", "bucketName", "contentLength", "contentType", "filename", "createdAt", "updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * @param sql
   * @param { StoreFileStoreInsertPartial_Input} value
   * @param { StoreFileStoreWhere} where
   * @returns {Promise<StoreFileStore[]>}
   */
  fileStoreUpdate: async (sql, value, where) => {
    await sql`INSERT INTO "fileStoreHistory" ("fileStoreId", "bucketName", "contentLength", "contentType", "filename", "createdAt")
SELECT id, "bucketName", "contentLength", "contentType", "filename", COALESCE("updatedAt", "createdAt", now()) FROM "fileStore" fs 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR fs."id" = ${
      where.id ?? null
    }) AND (COALESCE(${
      where.idIn ?? null
    }, NULL) IS NULL OR fs."id" = ANY (${sql.array(
      where?.idIn ?? [],
    )}::uuid[])) AND (COALESCE(${
      where.bucketName ?? null
    }, NULL) IS NULL OR fs."bucketName" = ${
      where.bucketName ?? null
    }) AND (COALESCE(${
      where.bucketNameLike ?? null
    }, NULL) IS NULL OR fs."bucketName" LIKE ${
      "%" + where.bucketNameLike + "%"
    })
`;
    let query = `UPDATE "fileStore" fs SET `;
    const argList = [];
    let idx = 1;
    if (value["bucketName"] !== undefined) {
      query += `"bucketName" = $${idx++}, `;
      argList.push(value["bucketName"]);
    }
    if (value["contentLength"] !== undefined) {
      query += `"contentLength" = $${idx++}, `;
      argList.push(value["contentLength"]);
    }
    if (value["contentType"] !== undefined) {
      query += `"contentType" = $${idx++}, `;
      argList.push(value["contentType"]);
    }
    if (value["filename"] !== undefined) {
      query += `"filename" = $${idx++}, `;
      argList.push(value["filename"]);
    }
    if (value["createdAt"] !== undefined) {
      query += `"createdAt" = $${idx++}, `;
      argList.push(value["createdAt"]);
    }
    query += `"updatedAt" = $${idx++}, `;
    argList.push(new Date());
    query = query.substring(0, query.length - 2);
    query += ` WHERE `;
    if (where.id !== undefined) {
      query += `fs."id" `;
      query += `= $${idx++}`;
      argList.push(where.id);
      query += " AND ";
    }
    if (where.idIn !== undefined) {
      query += `fs."id" `;
      query += `= ANY (ARRAY['${where.idIn.join("', '")}']::uuid[])`;
      query += " AND ";
    }
    if (where.bucketName !== undefined) {
      query += `fs."bucketName" `;
      query += `= $${idx++}`;
      argList.push(where.bucketName);
      query += " AND ";
    }
    if (where.bucketNameLike !== undefined) {
      query += `fs."bucketName" `;
      query += `LIKE $${idx++}`;
      argList.push(`%${where.bucketNameLike}%`);
      query += " AND ";
    }
    query = query.substring(0, query.length - 4);
    query += ` RETURNING fs."id", fs."bucketName", fs."contentLength", fs."contentType", fs."filename", fs."createdAt", fs."updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * @param sql
   * @param { StoreFileStoreWhere} where
   * @returns {Promise<(StoreFileStore & (history: StoreFileStore[]))[]>}
   */
  fileStoreSelectHistory: (
    sql,
    where,
  ) => sql`SELECT fs."id", fs."bucketName", fs."contentLength", fs."contentType", fs."filename", fs."createdAt", fs."updatedAt", array_agg(to_jsonb(fsh.*)) as history FROM "fileStore" fs LEFT JOIN "fileStoreHistory" fsh ON fs.id = fsh."fileStoreId" 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR fs."id" = ${
    where.id ?? null
  }) AND (COALESCE(${
    where.idIn ?? null
  }, NULL) IS NULL OR fs."id" = ANY (${sql.array(
    where?.idIn ?? [],
  )}::uuid[])) AND (COALESCE(${
    where.bucketName ?? null
  }, NULL) IS NULL OR fs."bucketName" = ${
    where.bucketName ?? null
  }) AND (COALESCE(${
    where.bucketNameLike ?? null
  }, NULL) IS NULL OR fs."bucketName" LIKE ${"%" + where.bucketNameLike + "%"})
GROUP BY fs.id`,

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @returns {Promise<StoreSessionStore[]>}
   */
  sessionStoreSelect: (
    sql,
    where,
  ) => sql`SELECT ss."id", ss."expires", ss."data", ss."createdAt", ss."updatedAt" FROM "sessionStore" ss 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR ss."id" = ${
    where.id ?? null
  }) AND (COALESCE(${
    where.idIn ?? null
  }, NULL) IS NULL OR ss."id" = ANY (${sql.array(
    where?.idIn ?? [],
  )}::uuid[])) AND (COALESCE(${
    where.expires ?? null
  }, NULL) IS NULL OR ss."expires" = ${where.expires ?? null}) AND (COALESCE(${
    where.expiresGreaterThan ?? null
  }, NULL) IS NULL OR ss."expires" > ${
    where.expiresGreaterThan ?? null
  }) AND (COALESCE(${
    where.expiresLowerThan ?? null
  }, NULL) IS NULL OR ss."expires" < ${where.expiresLowerThan ?? null})
`,

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @returns {Promise<number>}
   */
  sessionStoreCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as "genCount" FROM "sessionStore" ss 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR ss."id" = ${
      where.id ?? null
    }) AND (COALESCE(${
      where.idIn ?? null
    }, NULL) IS NULL OR ss."id" = ANY (${sql.array(
      where?.idIn ?? [],
    )}::uuid[])) AND (COALESCE(${
      where.expires ?? null
    }, NULL) IS NULL OR ss."expires" = ${
      where.expires ?? null
    }) AND (COALESCE(${
      where.expiresGreaterThan ?? null
    }, NULL) IS NULL OR ss."expires" > ${
      where.expiresGreaterThan ?? null
    }) AND (COALESCE(${
      where.expiresLowerThan ?? null
    }, NULL) IS NULL OR ss."expires" < ${where.expiresLowerThan ?? null})
`;
    return result?.[0]?.genCount ?? 0;
  },

  /**
   * @param sql
   * @param { StoreSessionStoreWhere} where
   * @returns {Promise<*[]>}
   */
  sessionStoreDelete: (sql, where) => sql`DELETE FROM "sessionStore" ss 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR ss."id" = ${
    where.id ?? null
  }) AND (COALESCE(${
    where.idIn ?? null
  }, NULL) IS NULL OR ss."id" = ANY (${sql.array(
    where?.idIn ?? [],
  )}::uuid[])) AND (COALESCE(${
    where.expires ?? null
  }, NULL) IS NULL OR ss."expires" = ${where.expires ?? null}) AND (COALESCE(${
    where.expiresGreaterThan ?? null
  }, NULL) IS NULL OR ss."expires" > ${
    where.expiresGreaterThan ?? null
  }) AND (COALESCE(${
    where.expiresLowerThan ?? null
  }, NULL) IS NULL OR ss."expires" < ${where.expiresLowerThan ?? null})
`,

  /**
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input|StoreSessionStoreInsertPartial_Input[]} insert
   * @returns {Promise<StoreSessionStore[]>}
   */
  sessionStoreInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    if (data.length === 0) {
      return [];
    }
    let query = `INSERT INTO "sessionStore" ("expires", "data", "createdAt", "updatedAt") VALUES `;
    const argList = [];
    let idx = 1;
    for (const it of data) {
      argList.push(
        it.expires ?? null,
        JSON.stringify(it.data ?? {}),
        it.createdAt ?? new Date(),
        it.updatedAt ?? new Date(),
      );
      query += `($${idx++}, $${idx++}, $${idx++}, $${idx++}),`;
    }
    // Remove trailing comma
    query = query.substring(0, query.length - 1);
    query += ` RETURNING "id", "expires", "data", "createdAt", "updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input} value
   * @param { StoreSessionStoreWhere} where
   * @returns {Promise<StoreSessionStore[]>}
   */
  sessionStoreUpdate: (sql, value, where) => {
    let query = `UPDATE "sessionStore" ss SET `;
    const argList = [];
    let idx = 1;
    if (value["expires"] !== undefined) {
      query += `"expires" = $${idx++}, `;
      argList.push(value["expires"]);
    }
    if (value["data"] !== undefined) {
      query += `"data" = $${idx++}, `;
      argList.push(JSON.stringify(value["data"]));
    }
    if (value["createdAt"] !== undefined) {
      query += `"createdAt" = $${idx++}, `;
      argList.push(value["createdAt"]);
    }
    query += `"updatedAt" = $${idx++}, `;
    argList.push(new Date());
    query = query.substring(0, query.length - 2);
    query += ` WHERE `;
    if (where.id !== undefined) {
      query += `ss."id" `;
      query += `= $${idx++}`;
      argList.push(where.id);
      query += " AND ";
    }
    if (where.idIn !== undefined) {
      query += `ss."id" `;
      query += `= ANY (ARRAY['${where.idIn.join("', '")}']::uuid[])`;
      query += " AND ";
    }
    if (where.expires !== undefined) {
      query += `ss."expires" `;
      query += `= $${idx++}`;
      argList.push(where.expires);
      query += " AND ";
    }
    if (where.expiresGreaterThan !== undefined) {
      query += `ss."expires" `;
      query += `> $${idx++}`;
      argList.push(where.expiresGreaterThan);
      query += " AND ";
    }
    if (where.expiresLowerThan !== undefined) {
      query += `ss."expires" `;
      query += `< $${idx++}`;
      argList.push(where.expiresLowerThan);
      query += " AND ";
    }
    query = query.substring(0, query.length - 4);
    query += ` RETURNING ss."id", ss."expires", ss."data", ss."createdAt", ss."updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * Note: Use only when id has a unique constraint
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input & { id?: string } } it
   * @returns {Promise<StoreSessionStore[]>}
   */
  sessionStoreUpsert: (sql, it) => {
    return sql`
INSERT INTO "sessionStore" ("id", "expires", "data", "createdAt", "updatedAt"
) VALUES (
${it.id ?? uuid()}, ${it.expires ?? null}, ${JSON.stringify(it.data ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}
) ON CONFLICT("id") DO UPDATE SET
"expires" = EXCLUDED."expires", "data" = EXCLUDED."data", "updatedAt" = EXCLUDED."updatedAt"
RETURNING "id", "expires", "data", "createdAt", "updatedAt"
`;
  },

  /**
   * Note: Use only when expires has a unique constraint
   * @param sql
   * @param { StoreSessionStoreInsertPartial_Input & { id?: string } } it
   * @returns {Promise<StoreSessionStore[]>}
   */
  sessionStoreUpsertByExpires: (sql, it) => {
    return sql`
INSERT INTO "sessionStore" ("id", "expires", "data", "createdAt", "updatedAt"
) VALUES (
${it.id ?? uuid()}, ${it.expires ?? null}, ${JSON.stringify(it.data ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}
) ON CONFLICT("expires") DO UPDATE SET
"data" = EXCLUDED."data", "updatedAt" = EXCLUDED."updatedAt"
RETURNING "id", "expires", "data", "createdAt", "updatedAt"
`;
  },

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @returns {Promise<StoreJobQueue[]>}
   */
  jobQueueSelect: (
    sql,
    where,
  ) => sql`SELECT jq."id", jq."isComplete", jq."priority", jq."scheduledAt", jq."name", jq."data", jq."createdAt", jq."updatedAt" FROM "jobQueue" jq 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR jq."id" = ${
    where.id ?? null
  }) AND (COALESCE(${where.idGreaterThan ?? null}, NULL) IS NULL OR jq."id" > ${
    where.idGreaterThan ?? null
  }) AND (COALESCE(${where.idLowerThan ?? null}, NULL) IS NULL OR jq."id" < ${
    where.idLowerThan ?? null
  }) AND (COALESCE(${where.name ?? null}, NULL) IS NULL OR jq."name" = ${
    where.name ?? null
  }) AND (COALESCE(${where.nameLike ?? null}, NULL) IS NULL OR jq."name" LIKE ${
    "%" + where.nameLike + "%"
  })
`,

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @returns {Promise<number>}
   */
  jobQueueCount: async (sql, where) => {
    const result = await sql`SELECT count(*) as "genCount" FROM "jobQueue" jq 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR jq."id" = ${
      where.id ?? null
    }) AND (COALESCE(${
      where.idGreaterThan ?? null
    }, NULL) IS NULL OR jq."id" > ${
      where.idGreaterThan ?? null
    }) AND (COALESCE(${where.idLowerThan ?? null}, NULL) IS NULL OR jq."id" < ${
      where.idLowerThan ?? null
    }) AND (COALESCE(${where.name ?? null}, NULL) IS NULL OR jq."name" = ${
      where.name ?? null
    }) AND (COALESCE(${
      where.nameLike ?? null
    }, NULL) IS NULL OR jq."name" LIKE ${"%" + where.nameLike + "%"})
`;
    return result?.[0]?.genCount ?? 0;
  },

  /**
   * @param sql
   * @param { StoreJobQueueWhere} where
   * @returns {Promise<*[]>}
   */
  jobQueueDelete: (sql, where) => sql`DELETE FROM "jobQueue" jq 
WHERE (COALESCE(${where.id ?? null}, NULL) IS NULL OR jq."id" = ${
    where.id ?? null
  }) AND (COALESCE(${where.idGreaterThan ?? null}, NULL) IS NULL OR jq."id" > ${
    where.idGreaterThan ?? null
  }) AND (COALESCE(${where.idLowerThan ?? null}, NULL) IS NULL OR jq."id" < ${
    where.idLowerThan ?? null
  }) AND (COALESCE(${where.name ?? null}, NULL) IS NULL OR jq."name" = ${
    where.name ?? null
  }) AND (COALESCE(${where.nameLike ?? null}, NULL) IS NULL OR jq."name" LIKE ${
    "%" + where.nameLike + "%"
  })
`,

  /**
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input|StoreJobQueueInsertPartial_Input[]} insert
   * @returns {Promise<StoreJobQueue[]>}
   */
  jobQueueInsert: (sql, insert) => {
    const data = Array.isArray(insert) ? insert : [insert];
    if (data.length === 0) {
      return [];
    }
    let query = `INSERT INTO "jobQueue" ("isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt") VALUES `;
    const argList = [];
    let idx = 1;
    for (const it of data) {
      argList.push(
        it.isComplete ?? false,
        it.priority ?? 0,
        it.scheduledAt ?? new Date(),
        it.name ?? null,
        JSON.stringify(it.data ?? {}),
        it.createdAt ?? new Date(),
        it.updatedAt ?? new Date(),
      );
      query += `($${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}),`;
    }
    // Remove trailing comma
    query = query.substring(0, query.length - 1);
    query += ` RETURNING "id", "isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input} value
   * @param { StoreJobQueueWhere} where
   * @returns {Promise<StoreJobQueue[]>}
   */
  jobQueueUpdate: (sql, value, where) => {
    let query = `UPDATE "jobQueue" jq SET `;
    const argList = [];
    let idx = 1;
    if (value["isComplete"] !== undefined) {
      query += `"isComplete" = $${idx++}, `;
      argList.push(value["isComplete"]);
    }
    if (value["priority"] !== undefined) {
      query += `"priority" = $${idx++}, `;
      argList.push(value["priority"]);
    }
    if (value["scheduledAt"] !== undefined) {
      query += `"scheduledAt" = $${idx++}, `;
      argList.push(value["scheduledAt"]);
    }
    if (value["name"] !== undefined) {
      query += `"name" = $${idx++}, `;
      argList.push(value["name"]);
    }
    if (value["data"] !== undefined) {
      query += `"data" = $${idx++}, `;
      argList.push(JSON.stringify(value["data"]));
    }
    if (value["createdAt"] !== undefined) {
      query += `"createdAt" = $${idx++}, `;
      argList.push(value["createdAt"]);
    }
    query += `"updatedAt" = $${idx++}, `;
    argList.push(new Date());
    query = query.substring(0, query.length - 2);
    query += ` WHERE `;
    if (where.id !== undefined) {
      query += `jq."id" `;
      query += `= $${idx++}`;
      argList.push(where.id);
      query += " AND ";
    }
    if (where.idGreaterThan !== undefined) {
      query += `jq."id" `;
      query += `> $${idx++}`;
      argList.push(where.idGreaterThan);
      query += " AND ";
    }
    if (where.idLowerThan !== undefined) {
      query += `jq."id" `;
      query += `< $${idx++}`;
      argList.push(where.idLowerThan);
      query += " AND ";
    }
    if (where.name !== undefined) {
      query += `jq."name" `;
      query += `= $${idx++}`;
      argList.push(where.name);
      query += " AND ";
    }
    if (where.nameLike !== undefined) {
      query += `jq."name" `;
      query += `LIKE $${idx++}`;
      argList.push(`%${where.nameLike}%`);
      query += " AND ";
    }
    query = query.substring(0, query.length - 4);
    query += ` RETURNING jq."id", jq."isComplete", jq."priority", jq."scheduledAt", jq."name", jq."data", jq."createdAt", jq."updatedAt"`;
    return sql.unsafe(query, argList);
  },

  /**
   * Note: Use only when id has a unique constraint
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input & { id?: number } } it
   * @returns {Promise<StoreJobQueue[]>}
   */
  jobQueueUpsert: (sql, it) => {
    return sql`
INSERT INTO "jobQueue" ("id", "isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt"
) VALUES (
${it.id ?? uuid()}, ${it.isComplete ?? false}, ${it.priority ?? 0}, ${
      it.scheduledAt ?? new Date()
    }, ${it.name ?? null}, ${JSON.stringify(it.data ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}
) ON CONFLICT("id") DO UPDATE SET
"isComplete" = EXCLUDED."isComplete", "priority" = EXCLUDED."priority", "scheduledAt" = EXCLUDED."scheduledAt", "name" = EXCLUDED."name", "data" = EXCLUDED."data", "updatedAt" = EXCLUDED."updatedAt"
RETURNING "id", "isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt"
`;
  },

  /**
   * Note: Use only when name has a unique constraint
   * @param sql
   * @param { StoreJobQueueInsertPartial_Input & { id?: number } } it
   * @returns {Promise<StoreJobQueue[]>}
   */
  jobQueueUpsertByName: (sql, it) => {
    return sql`
INSERT INTO "jobQueue" ("id", "isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt"
) VALUES (
${it.id ?? uuid()}, ${it.isComplete ?? false}, ${it.priority ?? 0}, ${
      it.scheduledAt ?? new Date()
    }, ${it.name ?? null}, ${JSON.stringify(it.data ?? {})}, ${
      it.createdAt ?? new Date()
    }, ${it.updatedAt ?? new Date()}
) ON CONFLICT("name") DO UPDATE SET
"isComplete" = EXCLUDED."isComplete", "priority" = EXCLUDED."priority", "scheduledAt" = EXCLUDED."scheduledAt", "data" = EXCLUDED."data", "updatedAt" = EXCLUDED."updatedAt"
RETURNING "id", "isComplete", "priority", "scheduledAt", "name", "data", "createdAt", "updatedAt"
`;
  },
};
