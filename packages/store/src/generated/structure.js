export const structure = JSON.parse(
  '{"store":{"fileStore":{"type":"object","group":"store","name":"fileStore","docString":"","isOptional":false,"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withHistory":true},"keys":{"id":{"type":"uuid","docString":"","isOptional":false,"sql":{"searchable":true,"primary":true}},"bucketName":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false},"sql":{"searchable":true}},"contentLength":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"integer":true}},"contentType":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false}},"filename":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false}}},"uniqueName":"StoreFileStore"},"sessionStore":{"type":"object","group":"store","name":"sessionStore","docString":"","isOptional":false,"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withDates":true},"keys":{"id":{"type":"uuid","docString":"","isOptional":false,"sql":{"searchable":true,"primary":true}},"expires":{"type":"date","docString":"","isOptional":false,"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}"}},"uniqueName":"StoreSessionStore"},"jobQueue":{"type":"object","group":"store","name":"jobQueue","docString":"","isOptional":false,"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withDates":true},"keys":{"id":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"integer":true},"sql":{"searchable":true,"primary":true}},"isComplete":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false},"sql":{"searchable":true}},"priority":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","validator":{"convert":false,"integer":true}},"scheduledAt":{"type":"date","docString":"","isOptional":true,"defaultValue":"(new Date())","sql":{"searchable":true}},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false},"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}"}},"uniqueName":"StoreJobQueue"}}}',
);
