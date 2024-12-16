/** !Anotações
 * async = função assíncrona
 * await = vai esperar algo finalizar para continuar a execução do código
 */

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const updatedAt = responseBody.updated_at;
  const postgresVersion = responseBody.dependencies.database.postgres_version;
  const maxConnections = responseBody.dependencies.database.max_connections;
  const openedConnections =
    responseBody.dependencies.database.opened_connections;

  expect(updatedAt).toBeDefined();
  const parsedUpdatedAt = new Date(updatedAt).toISOString();
  expect(updatedAt).toEqual(parsedUpdatedAt);

  expect(postgresVersion).toBeDefined();
  expect(postgresVersion).toEqual("16.0");

  expect(maxConnections).toBeDefined();
  expect(maxConnections).toEqual(100);

  expect(openedConnections).toBeDefined();
  expect(openedConnections).toEqual(1);
});
