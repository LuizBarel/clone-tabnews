import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <div>
        <UpdatedAt />
        <DatabaseStatus />
      </div>
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedTextAt = "Carregando...";

  if (!isLoading && data) {
    updatedTextAt = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <p>Última atualização: {updatedTextAt}</p>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let dataContent = "";
  let loadingText = "Carregando...";

  if (!isLoading && data) {
    dataContent = {
      postgresVersion: data.dependencies.database.postgres_version,
      maxConnections: data.dependencies.database.max_connections,
      openedConnections: data.dependencies.database.opened_connections,
    };
  }

  return (
    <>
      <h2>Banco de Dados:</h2>
      <div>
        <p>Versão: {dataContent.postgresVersion ?? loadingText}</p>
        <p>Conexões abertas: {dataContent.openedConnections ?? loadingText}</p>
        <p>Máximo de conexões: {dataContent.maxConnections ?? loadingText}</p>
      </div>
    </>
  );
}
