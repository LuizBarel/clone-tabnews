// Importações
import { createRouter } from "next-connect";
import database from "infra/database.js";
import controller from "infra/controller";

// Criação da rota
const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

/**
 * Função que retorna o status para o usuário
 * @param {*} request
 * @param {*} response
 */
async function getHandler(request, response) {
  const status = await database.status();

  response.status(200).json(status);
}
