// Importações
import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "models/user.js";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

/**
 * Função para executar e mostrar as migrations que foram executadas no sistema (caso tudo esteja em dia, não mostra nada)
 * @param {*} request parametro da requisição
 * @param {*} response parametro da resposta que vai ser retornada
 */
async function postHandler(request, response) {
  const userInputValues = request.body;
  const newUser = await user.create(userInputValues);

  return response.status(201).json(newUser);
}
