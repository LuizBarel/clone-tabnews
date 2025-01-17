// Importações
import database from "infra/database.js";
import { InternalServerError } from "infra/errors";

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
  try {
    const status = await database.status();

    response.status(200).json(status);
  } catch (error) {
    const publicErrorObject = new InternalServerError({
      cause: error,
    });

    console.log("\n Erro dentro do catch do controller:");
    console.error(publicErrorObject);

    response.status(500).json(publicErrorObject);
  }
}

export default status;
