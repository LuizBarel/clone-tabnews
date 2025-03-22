// Importações
import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database.js";
import { createRouter } from "next-connect";
import controller from "infra/controller";

// Criação da rota
const router = createRouter();

router.use(globalHandler);
router.get(getHandler);
router.post(postHandler);

export default router.handler(controller.errorHandlers);

/**
 * Função que vai ser executada sempre que uma requisição for solicitada
 */
async function globalHandler(request, response, next) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    request.defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pg-migrations",
    };

    // Executa a próxima função (no caso, a função handler do método HTTP usado)
    await next();
  } finally {
    dbClient.end();
  }
}

/**
 * Função que verifica as migrations pendentes do sistema
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
async function getHandler(request, response) {
  const pendingMigrations = await migrationRunner(
    request.defaultMigrationOptions,
  );

  return response.status(200).json(pendingMigrations);
}

/**
 * Função para executar e mostrar as migrations que foram executadas no sistema (caso tudo esteja em dia, não mostra nada)
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
async function postHandler(request, response) {
  const migratedMigrations = await migrationRunner({
    ...request.defaultMigrationOptions, // ... -> spread: espalha os atributos do objeto dentro de outro, permitindo a reescrita de quaisquer atributos

    dryRun: false,
  });

  if (migratedMigrations.length > 0) {
    return response.status(201).json(migratedMigrations);
  }

  return response.status(200).json(migratedMigrations);
}
