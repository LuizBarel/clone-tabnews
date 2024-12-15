import database from "infra/database.js";

/** !
 * request: parametro da requisição
 * response: parametro da resposta que vai ser retornada
 */
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({
    status: "ok",
  });
}

export default status;
