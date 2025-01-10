# clone-tabnews

Criação de um projeto clone do site TabNews com fins de estudos.

Este arquivo README terá explicações sobre o projeto em si, informações de cada arquivo e sobre termos e padrões utilizados. Tudo para registrar o conhecimento adquirido ao longo do desenvolvimento.

## 📋 Tópicos

- [O que é o projeto?](#O-que-é-o-projeto)
- [Tecnologias](#Tecnologias)
- [Explicação de cada arquivo e pasta](#Explicação-de-cada-arquivo-e-pasta)
- [Explicação de termos, padrões e nomes](#Explicação-geral)
- [Links](#Links)

## O que é o projeto?

O projeto é um clone do site já existente [TabNews](https://www.tabnews.com.br/). Aqui ele será montado do 0, através das aulas do [curso.dev](https://curso.dev/) do [Filipe Deschamps](https://github.com/filipedeschamps).

**Ao longo das aulas, irei adicionando explicações sobre telas e funcionalidades.**

## Tecnologias

Atualmente está sendo usado:

- Next
- React
- Git e GitHub

**Explicações serão adicionadas a cada tecnologia no futuro.**

## Explicação de cada arquivo e pasta

Nessa seção vou explicar o que cada arquivo faz, como uma forma de registrar meu aprendizado e, conforme for estudando, complementar e alterar as informações.

Cada seção deste tópico será dividida por pasta (que contém uma breve explicação do que encontrar nela) e seus arquivos.

---

### 📂 Pasta raiz

Pasta onde estão alguns arquivos de configuração do projeto e as pastas que compoe todo o site. Abaixo a estrutura atual do projeto:

```
📦 root
┣ 📂 .github
┃ ┗ 📂 workflows
┃    ┣ 📜 linting.yaml
┃    ┗ 📜 tests.yaml
┣ 📂 .husky
┃  ┣ 📜 commit-msg
┃  ┗ 📜 pre-commit
┣ 📂 infra
┃ ┣ 📜 compose.yaml
┃ ┣ 📜 database.js
┃ ┣ 📂 migrations
┃ ┃   ┗ 📜 1734553657446_test-migration
┃ ┗ 📂 scripts
┃    ┣ 📜 cycle-of-webserver.js
┃    ┗ 📜 wait-for-postgres.js
┣ 📂 pages
┃ ┣ 📜 index.js
┃ ┗ 📂 api
┃    ┗ 📂 v1
┃       ┣ 📂 migrations
┃       ┃  ┗ 📜 index.js
┃       ┗ 📂 status
┃          ┗ 📜 index.js
┣ 📂 tests
┃ ┣ 📜 orchestrator.js
┃ ┗ 📂 integration
┃    ┗ 📂 api
┃       ┗ 📂 v1
┃          ┣ 📂 migrations
┃          ┃  ┣ 📜 get.test.js
┃          ┃  ┗ 📜 post.test.js
┃          ┗ 📂 status
┃             ┗ 📜 get.test.js
┣ 📜 .editorconfig
┣ 📜 .env.development
┣ 📜 .eslintrc.json
┣ 📜 .gitignore
┣ 📜 .nvmrc
┣ 📜 .prettierignore
┣ 📜 .secretlintrc.json
┣ 📜 commitlint.config.js
┣ 📜 jest.config.js
┣ 📜 jsconfig.js
┣ 📜 LICENSE
┣ 📜 package-lock.json
┣ 📜 package.json
┗ 📜 README.md
```

#### 📜 .env.development

Arquivo usado para guardar as variáveis de ambiente do projeto, como valores para conexão do banco de dados, chaves API e portas. Este arquivo .env é usado especificamente para o desenvolvimento do projeto.

#### 📜 .editorconfig

Arquivo usado para padronizar configurações do editor de código em projetos, garantindo uma padronização entre diferentes colaboradores. Ele define regras como indentação, uso de espaços ou tabs, codificação de caracteres, etc. Essas configurações podem ser aplicadas a todos os arquivos ou a diretórios específicos, facilitando a manutenção do código.

#### 📜 .eslintrc.json

Arquivo com algumas configurações que você pode mexer do Eslint, uma ferramenta para análise estática de código que ajuda a identificar e corrigir problemas no código JavaScript. Por exemplo, com ele é possível extender algumas configurações extras, plugins, definir regras personalizadas.

#### 📜 .gitignore

O arquivo .gitignore é usado para informar ao Git quais arquivos ou pastas devem ser ignorados no versionamento. Isso significa que o Git não rastreará nem incluirá esses itens em commits, como se eles não existissem para ele. Dessa forma, é possível proteger informações sensíveis, e evitar o registro de arquivos gerados automaticamente, no nosso caso, as pastas node_modules e .next.

#### 📜 .nvmrc

Arquivo responsável por armazenar a versão do Node utilizado no projeto. Nele contém escrito `lts/hydrogen` (a versão que estamos usando), e ele está aqui para definir qual é a versão padrão utilizada no nosso projeto, ou seja, sempre que for executado `nvm install`, ele pegará o que está definido em `.nvmrc` e utilizará para instalação da versão.

- Curiosidade: este tipo de arquivo é um arquivo de "run commands", e para identificar esse tipo de arquivo, veja se ele possui "**rc**" no final dele. Esses arquivos são executados automaticamente quando o programa inicia, e geralmente contém configurações e comandos.

#### 📜 .prettierignore

Arquivo usado para instruir o Prettier sobre quais arquivos ou diretórios devem ser ignorados durante a aplicação de regras de formatação. (A partir da versão 3.0.0, o próprio Prettier ignora o que está no .gitignore, mas deixei aqui para demonstrar uma solução para versões mais antigas).

#### 📜 .secretlint.json

É o arquivo de configuração do Secretlint, uma ferramenta que ajuda a identificar e prevenir a exposição de segredos (como senhas, chaves de API e outros dados sensíveis) no código-fonte, ele atualmente define as regras a serem usadas pelo módulo.

#### 📜 commitlint.config.js

É onde fica a configuração do módulo "Commitlint", que tem como objetivo garantir que as mensagens de commit sigam um formato e estilo padronizados. Por enquanto, ele serve para mostrar ao módulo qual "modelo de configuração" do módulo usar (ele possui várias configurações que podem ser exportadas).

#### 📜 jest.config.js

Um arquivo de configurações para o jest, onde nele definimos algumas configurações para os testes. Podemos definir, por exemplo, o diretorio raiz de testes, qual arquivo .env deve ser usado e habilitar o uso de sintaxes modernas como ESM (ECMAScript Modules).

#### 📜 jsconfig.js

Arquivo que define configurações para o uso de JavaScript no projeto. Atualmente, ele define a URL base do projeto.

#### 📜 LICENSE

É o arquivo de licença do projeto. Atualmente a licença é o MIT. Isso significa que qualquer pessoa pode usar, modificar e distribuir o software, desde que inclua a licença original e o aviso de copyright (ou seja, você pode mexer nele 😊).

#### 📜 package.json

Arquivo que contém metadados de um projeto node, como nome, autor, descrição, licença, scripts do projeto, etc. Mas uma das principais funções dele é listar as dependencias do sistema, assim, quando for preciso instalar o que é preciso para tudo funcionar, é o package.json que assegura que todas as libs/módulos necessárias serão instaladas.

#### 📜 package-lock.json

Este é responsável por manter todas as dependências e subdependências na respectiva versão e configuração definida pelo dev, assim garantindo que a versão vai ser igual independente do ambiente onde está sendo desenvolvida. Dessa forma, ele evita problemas de incompatibilidade e evita que os pacotes atualizem inesperadamente.

#### 📜 README.md

Este arquivo do tipo markdown geralmente serve para documentar as informações essenciais do sistema, como descrições das funcionalidades, instruções de instalação, requisitos e exemplos de uso. Se um usuário quer conhecer o projeto, é o primeiro lugar que ele deve acessar.

Porém, neste projeto estou utilizando o README.md também para anotações e explicações do que está sendo usado no desenvolvimento, a fim de ter um lugar organizado para consulta posterior.

---

### 📂 .github

Diretório especial de arquivos de configuração relacionados a funcionalidades extras do GitHub.

### 📂 .github/workflows

Responsável por guardar os workflows do GitHub Actions. Workflows são automações que podem ser executadas em resposta a eventos no repositório (por exemplo, ao fazer um pull request).

#### 📜 .github/workflows/**linting.yaml**

É um workflow que será executado durante o pull request, ele tem como objetivo verificar se a formatação padrão de código e commits está correta, assim como se o código está limpo (limpo de acordo com as definições do ESLINT, como por exemplo, não ter variáveis sem uso/atribuição no código).

#### 📜 .github/workflows/**tests.yaml**

É um workflow que será executado durante o pull request, ele tem como objetivo rodar os testes automatizados do projeto e ver se não ocorre nenhum erro de execução.

---

### 📂 .husky

Diretório onde fica configurado o husky (este que está numa pasta ignorada pelo git) e os arquivos a serem executados por ele. Husky é uma ferramenta usada para definir e executar scripts durante o processo de interação com o Git, atualmente usamos para executar comandos durante o processo de commit.

#### 📜 .husky/**commit-msg**

É um arquivo que contêm o comando que vai ser rodado após a criação de uma mensagem de commit. O comando em si verifica se a mensagem do commit está seguindo o padrão definido.

#### 📜 .husky/**pre-commit**

É um arquivo que contêm o comando que vai ser executado logo antes do commit ser feito, ou seja, na primeira etapa do processo de commit (antes mesmo do `.husky/commit-msg`). O comando em si escrito nele verifica se existem "secrets" escritos em algum arquivo do commit, mas num geral, serve para várias verificações de pré-processamento.

---

### 📂 Infra

Pasta responsável por guardar arquivos sobre a infraestrutura do projeto. Por exemplo, arquivos sobre o database, containers e outros serviços.

#### 📜 Infra/**compose.yaml**

Um arquivo responsável por configurar os serviços do Docker. No momento, ele contêm a configuração do banco de dados, com sua imagem, variáveis de ambiente e portas definidas.

#### 📜 Infra/**database.js**

Arquivo responsável por gerenciar a conexão com o banco de dados e realizar consultas. Utilizamos o módulo 'pg' para conexão (módulo de conexão para SGBD Postgres).

#### 📂 infra/**migrations**

Diretório responsável por guardar as migrations do nosso projeto. Migrations são scripts responsáveis por manusear e versionar alterações (exemplo :criação, exclusão e modificação de tabelas) no nosso banco de dados via código, evitando a utilização de meios manuais de alteração.

#### 📜 infra/migrations/**1734553657446_test-migration**

Arquivo de uma migration de teste. Atualmente não levanta nenhuma alteração no banco de dados, sendo usado apenas como experimento para validação do fluxo de migrations.

#### 📂 infra/**scripts**

Pasta que mantem os scripts utilizados na infraestrutura do projeto, oferecendo suporte a operações críticas e automações necessárias para o funcionamento correto dos serviços.

#### 📜 infra/scripts/**wait-for-postgres.js**

Arquivo que executa uma função para garantir que o PostgreSQL esteja pronto para uso antes que outras operações dependentes sejam realizadas. Este script é usado para que problemas de "race conditions" que envolvam o postgres não aconteçam (ex: as migrations serem executadas antes do postgres inicializar).

#### 📜 infra/scripts/**cycle-of-webserver.js**

Arquivo que executa um método responsável por inicializar o servidor local, e quando for encerrado, exterminar todos os serviços que iniciaram junto com ele. Ele é executado no comando "npm run dev".

---

### 📂 Pages

É a pasta onde ficará todas as páginas do site, e ela define automaticamente que, qualquer arquivo JS/TS aqui, é uma página (com rota URL).

#### 📜 pages/**index.js**

É a página inicial do projeto, tem esse nome pois, por convenção, toda página inicial se chama index (isso vem de antigamente, onde os websites possuiam uma página que recebia o usuário contendo links para o restante das páginas).

#### 📂 pages/**api**

Uma subpasta de pages, é responsável por guardar as páginas/rotas referentes a API do sistema, contendo nela subpastas de cada versão.

#### 📂 pages/api/**v1**

É a pasta da versão 1.0 da API do sistema. Mantem todas as rotas da API da versão referente.

#### 📂 pages/api/v1/**migrations**

Guarda o que é preciso para a rota [/api/v1/migrations]().

#### 📂 pages/api/v1/migrations/**index.js**

Contêm as formas de retorno de cada solicitação HTTP. Com retornos GET e POST, a requsição GET retorna as migrations pendentes do projeto; a requisição POST executa as migrations pendentes e retorna quais foram executadas.

#### 📂 pages/api/v1/**status**

Guarda o que é preciso para a rota [/api/v1/status]().

#### 📂 pages/api/v1/status/**index.js**

Contêm as formas de retorno de cada solicitação HTTP. Com apenas requisição GET, a estrutura retornada é um json com dados do status do database.

### 📂 Tests

É a pasta que armazena todos os testes automatizados do projeto. A estrutura de pastas dos testes reflete a estrutura dos arquivos testados. Para evitar redundância, apenas os arquivos de teste são descritos.

Exemplo destacando os caminhos semelhantes:

```
┣ 📂 pages
┃ ┗ 📂 api --> Caminhos semelhantes
┃    ┗ 📂 v1
┃       ┗ 📂 status
┃          ┗ 📜 index.js ----> arquivo que tem o que vai ser testado
┣ 📂 tests
┃ ┗ 📂 integration
┃    ┗ 📂 api --> Caminhos semelhantes
┃       ┗ 📂 v1
┃          ┗ 📂 status
┃             ┗ 📜 get.test.js ----> arquivo de teste
```

#### 📜 tests/**orchestrator.js**

Arquivo que tem como objetivo garantir que todos os serviços necessários de sua responsabilidade estarão disponíveis para os comandos subsequentes. Ele garante através da espera do funcionamento do serviço (atualmente sendo o web server).

#### 📂 tests/**integration**

Responsável por guardar todos os testes que são **testes de integração** (testes que verificam como diferentes partes do sistema funcionam em conjunto).

#### 📜 tests/integration/api/v1/migrations/**get.test.js**

Arquivo de teste responsável por testar a requisição GET da rota [/api/v1/migrations](). Nela testa se a requisição volta com o status code 200 e se seu corpo retorna um array que não esteja vazio.

#### 📜 tests/integration/api/v1/migrations/**post.test.js**

Testa a requisição POST da rota [/api/v1/migrations](). Nela testa duas requisições POST em sequência: na primeira, a requisição deve retornar com o status code 201 e o seu corpo deve devolver um array que não esteja vazio; na segunda requisição, ela deve retornar com o status code 200 e o corpo deve devolver um array que esteja vazio.

#### 📜 tests/integration/api/v1/status/**get.test.js**

Este é o arquivo de teste responsável por testar a requisição GET da rota [/api/v1/status](). Nela testa se a requisição volta com o status code 200 e se suas informações estão coerentes.

## Explicação geral

### Protocolos

São convenções que são utilizadas entre cliente-servidor na web para garantir a melhor forma de passar informação entre os lados. Os protocolos podem ser utilizados juntos, como se fosse camadas.
Esses tendem a seguir o modelo OSI ou TCP/IP, que possuem camadas para cada função.

- Exemplo: HTTP (define como as informações vão ser trocadas) > TCP (transmite as informações de forma confiável) > IP (encaminha os dados pela rede)

#### HTTP

HyperText Transfer Protocol: protocolo que é usado para transferência de arquivos "hypertext" (arquivos que fazem referência a outros documentos)

- Curiosidade: hoje em dia o HTTP em si não é tão seguro, por isso, foi se criado o HTTPS, que é uma versão que utiliza o protocolo SSL/TLS para criptografia, o que permite uma segurança superior ao HTTP.

#### FTP

File Transfer Protocol: protocolo para transferências de arquivos. Geralmente usado em servidores e websites.

#### SMTP

Simple Mail Transfer Protocol: protocolo para transferências de mensagens de e-mail.

#### TCP (Transmission Control Protocol)

Protocolo que prioriza a confiabilidade dos dados transmitidos, mesmo que isso reduza a velocidade, garantindo que todos os dados chegam ao destino sem perdas. Ele faz a verificação de cada pacote, observando se eles estão na ordem correta, com todo o conteúdo que foi passado.

#### UDP (User Datagram Protocol)

Protocolo que oferece uma transmissão mais rápida que o TCP, mas sem garantia de entrega de todos os pacotes, o que permite perdas. Ele não possui verificação dos pacotes, e por esse motivo que ele é mais rápido (e menos íntegro).

#### Onde usar TCP ou UDP?

| Protocolo | Uso                                                       | Exemplos                          |
| --------- | --------------------------------------------------------- | --------------------------------- |
| TCP       | Pacotes enviados totalmente, sem perda e na ordem correta | Mensagens, arquivos               |
| UDP       | Pacotes não precisam chegar na íntegra                    | Chamadas em vídeo, jogos digitais |

**Curiosidade:** O lag ocorre por causa da perda de pacotes e da forma como o UDP ignora esse problema.

Resumindo: TCP: mais confiabilidade, menos velocidade, UDP: mais velocidade, menos confiabilidade.

#### IP (Internet Protocol)

Protocolo responsável por direcionar, encaminhar e rotear os pacotes de dados para o destino correto através da rede.
Geralmente usado com o TCP, formando o protocolo TCP/IP.

---

#### DNS

O DNS (Domain Name System) é um sistema que traduz nomes de domínio legíveis por humanos (como o tabnews.com.br) em endereços IP numéricos, que são lidos pelos computadores para localizar servidores e serviços na internet. Ele funciona como uma espécie de "lista telefônica da internet", permitindo que você acesse sites digitando nomes, ao invés de longas sequências numéricas.

#### File-based Routing

É uma forma de definir as rotas do projeto, onde cada arquivo dentro de uma pasta (no nosso caso atual, a pages) se torna uma rota, ou seja, a estrutura do diretório "pages" é a estrutura das URLs de cada página do site. Dessa forma não é necessário criar cada rota manualmente em algum arquivo.

- Obs.: existe uma outro diretório que pode ser usado para o mesmo fim, chamado de "app".

#### Relação Client/Server

A relação Client/Server é uma forma de descrever a interação entre um cliente (que faz uma solicitação), e um servidor (que processa essa solicitação e retorna uma resposta).

Segue um exemplo:
Um usuário acessa o site do TabNews e clica no botão para comentar em um post. Como o usuário não está logado, o site exibe uma tela de login.

O que aconteceu?
O usuário atuou como o cliente da relação, requisitando a funcionalidade de comentar no post. O site, funcionando como o servidor, processou essa solicitação, viu que ele não estava na conta e respondeu envinado a tela de login.

#### Hospedagem e Deploy

Hospedagem é o processo de colocar o sistema em um servidor, fazendo com que ele esteja disponível na internet para que os usuários possam acessá-lo a qualquer momento. Ao hospedar, seus arquivos irão para um computador especializado em manter o sistema online.

Deploy é sobre o processo de colocar o que foi desenvolvido localmente no ambiente de produção. Existem deploys que podem ser configurados para serem automatizados, por exemplo, com integração contínua, que ajudam a garantir que as atualizações sejam implementadas eficientemente.

#### Continuous Integration (CI)

Continuous Integration (ou Integração Contínua) é uma prática no desenvolvimento de software que envolve a integração frequente do código de diferentes desenvolvedores em um repositório compartilhado. Toda vez que uma mudança é feita no código, um sistema automatizado verifica se tudo está funcionando corretamente.

---

### Milestones e Issues

São algumas formas que estamos organizando a produção do projeto.

#### Milestones

São marcos importantes no planejamento do projeto, usados para organizar o progresso em etapas maiores ou metas principais. Elas permitem acompanhar o andamento e verificar se os objetivos gerais estão sendo atingidos. Cada milestone pode agrupar várias issues.

#### Issues

São tarefas específicas ou problemas do projeto que precisam ser resolvidos. Representam etapas menores com mais detalhes, servindo como componentes das milestones. Issues podem incluir correções de bugs, desenvolvimento de novas funcionalidades ou tarefas organizacionais.

---

#### LTS

LTS, ou Long Term Support (Suporte de Longo Prazo), são versões de software que os desenvolvedores da plataforma garantem que terão um suporte de longo prazo, ou seja, os códigos desenvolvidos com versões "LTS" recebem patches de correção/segurança e suporte atualizados durante um longo tempo. Esse tipo de versão é útil para criar projetos mais estáveis, por isso, utilizamos o **LTS hydrogen** no sistema.

#### Endpoint

É o local final que uma requisição HTTP chega, também é usado para descrever um endereço de API.

#### Serverless

É um modelo de computação em nuvem onde, o responsável por configurar, escalar e gerenciar o servidor fica com o provedor. Ou seja, nós devs apenas têm o objetivo de codificar o sistema, enquanto o provedor (Vercel) cuida desse processo por trás.

#### YAML

YAML significa "Yet Another Markup Language", mas atualmente pode ser entendido como: "YAML Ain't Markup Language". É usado para armazenar dados, porém de forma mais simples para humanos, e é usado em vários serviços, um exemplo seria o Docker.

## Links

Alguns links que usei para estudar ou complementar este arquivo (ou que não foram temas abordados diretamente no curso.dev).

#### Protocolos

- [Protocolos no geral](https://www.hostmidia.com.br/blog/protocolos-de-internet/)
- [Modelo OSI e TCP/IP](https://www.azion.com/pt-br/blog/modelo-osi-modelo-tcp-ip-importancia-dos-padroes-para-redes-e-internet/)
- [UDP vs TCP](https://youtu.be/ZEEBsq3eQmg)

#### Serverless

- [Explicação](https://www.redhat.com/pt-br/topics/cloud-native-apps/what-is-serverless)
- [Explicação 2 (obs: apenas alunos do curso.dev conseguem acessar este link)](https://curso.dev/alunos/Andrei/b49e8662-5d37-4132-b481-c09c2157dcd7)
