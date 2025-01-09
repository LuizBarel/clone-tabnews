const { spawn } = require("child_process");

/**
 * Função que inicia o ciclo de vida do servidor, o qual consiste em:
 * executar o npm run dev:cycle, que inicia o servidor
 * executar o método "stopAllServices" quando o servidor for encerrado
 */
function startCycleLife() {
  // Executa o npm run dev:cycle
  const currentProcess = spawn("npm", ["run", "dev:cycle"], {
    stdio: "inherit", // Herda o stdio, permitindo ver o que o comando "solta" de outputs
  });

  // Ao iniciar o servidor, emite a mensagem
  currentProcess.on("spawn", () => {
    console.log(
      "🌐 Starting cycle life of server\nTo stop this server: 'Ctrl + C'",
    );
  });

  // Quando o servidor parar de ser executado, para todos os serviços relacionados a ele
  process.on("SIGINT", () => {
    console.log("\nStopping server...");
    stopAllServices();
    currentProcess.kill("SIGINT");
  });

  /**
   * Função para parar todos os serviços relacionados ao servidor (cada serviço em uma função)
   */
  function stopAllServices() {
    stopDocker();
    console.log("The server was stopped with your services");
  }

  /**
   * Função para parar o docker executando o comando "npm run services:stop" com spawn
   */
  function stopDocker() {
    spawn("npm", ["run", "services:stop"], {
      stdio: "inherit",
    });
  }
}

startCycleLife();
