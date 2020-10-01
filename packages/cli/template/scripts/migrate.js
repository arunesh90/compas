import { mainFn } from "@lbu/stdlib";
import {
  getMigrationsToBeApplied,
  newMigrateContext,
  newPostgresConnection,
  runMigrations,
} from "@lbu/store";

mainFn(import.meta, main);

/**
 * @param {Logger} logger
 */
async function main(logger) {
  const sql = await newPostgresConnection({ createIfNotExists: true });
  const mc = await newMigrateContext(sql);
  logger.info(getMigrationsToBeApplied(mc));

  await runMigrations(mc);

  await sql.end();
}
