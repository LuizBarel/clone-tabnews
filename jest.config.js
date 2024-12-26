// Importações
const nextJest = require("next/jest");
const dotenv = require("dotenv");

// Definindo o diretório raiz do projeto Next.js
const createJestConfig = nextJest({
  dir: ".",
});

// Configurando para que os testes utilizem o .env.development
dotenv.config({
  path: ".env.development",
});

// Criando a configuração do Jest e especificando os diretórios onde os módulos devem ser resolvidos.
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

// Exportando a configuração
module.exports = jestConfig;
