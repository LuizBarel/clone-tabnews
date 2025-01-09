// Importações
import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database.js";

/**
 * Função para controlar os métodos GET e POST das migrations
 *
 * GET: mostra as migrations pendentes do sistema
 * POST: executa e mostra as migrations que foram executadas no sistema (caso tudo esteja em dia, não mostra nada)
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
export default async function migrations(request, response) {
  const allowedMethods = ["GET", "POST"];

  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }

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

    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);

      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationOptions, // ... -> spread: espalha os atributos do objeto dentro de outro, permitindo a reescrita de quaisquer atributos
        dryRun: false,
      });

      if (migratedMigrations.length > 0) {
        return response.status(201).json(migratedMigrations);
      }

      return response.status(200).json(migratedMigrations);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
