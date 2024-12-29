const { exec } = require("node:child_process");

/**
 * Método recursivo que verifica se o Postgres está ativo através de um comando de terminal.
 */
function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  /**
   * Função que identifica se o retorno do comando é "-1" (significa que o postgres não está ativo).
   *
   * Caso seja verdade, chama checkPostgres() para uma tentativa nova de verificação
   */
  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres pronto e aceitando conexões\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
