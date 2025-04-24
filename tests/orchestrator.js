import retry from "async-retry";
import database from "infra/database.js";
import migrator from "models/migrator.js";

/**
 * Método que tem como objetivo esperar todos os serviços inicializarem para poder continuar a execução.
 * Atualmente apenas o serviço do servidor web está contido aqui
 */
async function waitForAllServices() {
  await waitForWebServer();

  /**
   * Função que espera pelo servidor web responder com um status code 200
   */
  async function waitForWebServer() {
    // ! retry tentará 100 vezes executar a função "fetchStatusPage" de forma correta
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
      minTimeout: 100,
    });

    /**
     * Função que acessa a página "api/v1/status" e verifica seu status.
     *
     * Caso seja diferente de 200, lança um erro.
     */
    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

/**
 * Método para limpar o banco de dados (excluir e em seguida criar ele novamente)
 * Utilizado nos testes automatizados que envolvem o DB
 */
async function clearDatabase() {
  await database.query("DROP schema public cascade; CREATE schema public");
}

/**
 *
 */
async function runPendingMigrations() {
  await migrator.runPendingMigrations();
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
};

export default orchestrator;
