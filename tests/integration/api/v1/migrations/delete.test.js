import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("DELETE /api/v1/migrations", () => {
  describe("Anonymus user", () => {
    describe("Trying method not allowed", () => {
      test("DELETE", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "DELETE",
          },
        );

        expect(response.status).toBe(405);

        const responseBody = await response.json();

        expect(responseBody).toEqual({
          name: "MethodNotAllowedError",
          message: "Método não permitido para este endpoint.",
          action:
            "Verifique se o método HTTP enviado é válido para este endpoint.",
          status_code: 405,
        });
      });
    });
  });
});
