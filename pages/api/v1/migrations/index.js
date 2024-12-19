// Importações
import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
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
  const dbClient = await database.getNewClient();
  const defaultMigrationOptions = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pg-migrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions);

    await dbClient.end();

    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions, // ... -> spread: espalha os atributos do objeto dentro de outro, permitindo a reescrita de quaisquer atributos
      dryRun: false,
    });

    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }

  return response.status(405).end();
}
