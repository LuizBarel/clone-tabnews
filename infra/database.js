// Importações
import { Client } from "pg";

/**
 * Função para realizar uma consulta no banco de dados
 * @param {String} queryObject
 * @returns
 */
async function query(queryObject) {
  let client;

  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

/**
 * Função que retorna informações de status do BD:
 * quando foi requisitado, a versão do postgres, o máximo de conexões que podem ficar abertas e quantas conexões estão abertas no momento
 * @returns
 */
async function status() {
  const updatedAt = new Date().toISOString();

  const postgresVersion = (await query("SHOW server_version;")).rows[0]
    .server_version;

  const maxConnections = (await query("SHOW max_connections;")).rows[0]
    .max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const openedConnections = (
    await query({
      text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    })
  ).rows[0].count;

  return {
    updated_at: updatedAt,
    dependencies: {
      database: {
        postgres_version: postgresVersion,
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
      },
    },
  };
}

/**
 * Função para retornar o valor do SSL na conexão
 * Caso tenha CA próprio: retorna o CA
 * Caso esteja sendo executada em ambiente de desenvolvimento: retorna false (sem SSL), se não, retorna true (com SSL)
 */
function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  }
  return process.env.NODE_ENV === "production" ? true : false;
}

/**
 * Função para limpar o banco de dados (excluir e em seguida criar ele novamente)
 * Utilizado nos testes automatizados que envolvem o DB
 */
async function cleanDatabase() {
  await query("DROP schema public cascade; CREATE schema public");
}

/**
 * Função que retorna um cliente do bd com conexão já aberta
 * @returns client
 */
async function getNewClient() {
  // Criando um novo cliente (conexão entre o back e o banco de dados) com suas informações
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  await client.connect();

  return client;
}

const database = {
  query,
  status,
  cleanDatabase,
  getNewClient,
};

export default database;
