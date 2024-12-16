// Importações
import database from "infra/database.js";

/** ! Anotações
 * request: parametro da requisição
 * response: parametro da resposta que vai ser retornada
 */

/**
 * Função que retorna o status para o usuário
 * @param {*} request
 * @param {*} response
 */
async function status(request, response) {
  const status = await database.status();

  response.status(200).json(status);
}

export default status;
