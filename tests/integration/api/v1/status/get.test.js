import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

/** ! Anotações de aula
 * async = função assíncrona
 * await = vai esperar algo finalizar para continuar a execução do código
 */

describe("GET /api/v1/status", () => {
  describe("Anonymus user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      const updatedAt = responseBody.updated_at;
      const postgresVersion =
        responseBody.dependencies.database.postgres_version;
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
  });
});
