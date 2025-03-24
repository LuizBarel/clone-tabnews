// importações
import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database.js";
import { ServiceError } from "infra/errors";

async function listPendingMigrations() {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pg-migrations",
    };

    return await migrationRunner(defaultMigrationOptions);
  } finally {
    await dbClient?.end();
  }
}

async function runPendingMigrations() {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pg-migrations",
    };

    return await migrationRunner({
      ...defaultMigrationOptions, // ... -> spread: espalha os atributos do objeto dentro de outro, permitindo a reescrita de quaisquer atributos
      dryRun: false,
    });
  } catch (error) {
    const serviceErrorObject = new ServiceError({
      cause: error,
      message: "Ocorreu um erro na execução das migrações pendentes",
    });
    throw serviceErrorObject;
  } finally {
    dbClient?.end();
  }
}

const migrator = {
  listPendingMigrations,
  runPendingMigrations,
};

export default migrator;
