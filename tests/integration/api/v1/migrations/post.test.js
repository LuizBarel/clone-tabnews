import database from "infra/database.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.cleanDatabase();
});

/**
 * Explicação do teste:
 * Ele vai simular 2 requisições POST em sequência.
 * A primeira requsição sobre a rota deve executar as migrations, por isso deve retornar o status code 201 (created), e junto disso, um array com as migrations que foram executadas.
 * Na segunda requisição, a rota deve tentar executar novamente as migrations, mas ela irá ver que não existe mais migrations a ser rodadas, e por isso, deve retornar um status
 * code 200 (ok) e um array vazio.
 */
test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();

  expect(Array.isArray(response1Body)).toBe(true);
  expect(response1Body.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();

  expect(Array.isArray(response2Body)).toBe(true);
  expect(response2Body.length).toBe(0);
});
