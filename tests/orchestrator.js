import retry from "async-retry";

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
    // retry tentará 100 vezes executar a função "fetchStatusPage" de forma correta
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

const orchestrator = {
  waitForAllServices,
};

export default orchestrator;
