/**
 * request: parametro da requisição
 * response: parametro da resposta que vai ser retornada
 */
function status(request, response) {
  response.status(200).json({
    "status": "ok"
  });
}

export default status;
