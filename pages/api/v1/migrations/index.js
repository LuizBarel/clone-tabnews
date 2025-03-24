// Importações
import { createRouter } from "next-connect";
import controller from "infra/controller";
import migrator from "models/migrator";

// Criação da rota
const router = createRouter();

router.get(getHandler);
router.post(postHandler);

export default router.handler(controller.errorHandlers);

/**
 * Função que verifica as migrations pendentes do sistema
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
async function getHandler(request, response) {
  const pendingMigrations = await migrator.listPendingMigrations();
  return response.status(200).json(pendingMigrations);
}

/**
 * Função para executar e mostrar as migrations que foram executadas no sistema (caso tudo esteja em dia, não mostra nada)
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
async function postHandler(request, response) {
  const migratedMigrations = await migrator.runPendingMigrations();

  if (migratedMigrations.length > 0) {
    return response.status(201).json(migratedMigrations);
  }

  return response.status(200).json(migratedMigrations);
}
