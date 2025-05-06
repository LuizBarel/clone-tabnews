import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "models/user.js";

const router = createRouter();

router.get(getHandler);
router.patch(patchHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const username = request.query.username;
  const userData = await user.findOneByUsername(username);

  return response.status(200).json(userData);
}

async function patchHandler(request, response) {
  const userInputValues = request.body;
  const username = request.query.username;

  const updatedUser = await user.update(username, userInputValues);

  return response.status(200).json(updatedUser);
}
