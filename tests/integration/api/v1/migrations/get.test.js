// Importações
import database from "infra/database.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.cleanDatabase();
});

/**
 * Explicação do teste:
 *
 * Simula uma requisição GET, e ela deve entrar na rota que deve executar as migrations pendentes em "dryRun" (uma forma de execução que apenas verifica se está certo,
 * sem executar de verdade). Por isso, toda vez que se entra na rota, é obrigatório rodar as migrations pendentes, e por consequência, retornar um
 * array com as migrations.
 */
test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
