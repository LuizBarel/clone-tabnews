# clone-tabnews
Criação de um projeto clone do site TabNews com fins de estudos.

Este arquivo README terá explicações sobre o projeto em si, informações de cada arquivo e sobre termos e padrões utilizados. Tudo para registrar o conhecimento adquirido ao longo do desenvolvimento.

## Tópicos
- O que é o projeto?
- Tecnologias
- Explicação de cada arquivo
- Explicação de termos, padrões e nomes

## O que é o projeto?
O projeto é um clone do site já existente [TabNews](https://www.tabnews.com.br/). Aqui ele será montado do 0, através das aulas do [curso.dev](https://curso.dev/) do [Filipe Deschamps](https://github.com/filipedeschamps).

**Ao longo das aulas, irei adicionando explicações sobre telas e funcionalidades.**

## Tecnologias
Atualmente está sendo usado:
- Next
- React
- Git e GitHub

**Explicações serão adicionadas a cada tecnologia no futuro.**

## Explicação de cada arquivo
Nessa seção vou explicar o que cada arquivo faz, como uma forma de registrar meu aprendizado e, conforme for estudando, complementar e alterar as informações.

Cada seção deste tópico será dividida por pasta (que contém uma breve explicação do que encontrar nela) e seus arquivos.

### Pasta raiz
Pasta onde estão alguns arquivos de configuração do projeto.

#### .nvmrc
Arquivo responsável por armazenar a versão do Node utilizado no projeto. Nele contém escrito `lts/hydrogen` (a versão que estamos usando), e ele está aqui para definir qual é a versão padrão utilizada no nosso projeto, ou seja, sempre que for executado `nvm install`, ele pegará o que está definido em `.nvmrc` e utilizará para instalação da versão.

- Curiosidade: este tipo de arquivo é um arquivo de "run commands", e para identificar esse tipo de arquivo, veja se ele possui "**rc**" no final dele. Esses arquivos são executados automaticamente quando o programa inicia, e geralmente contém configurações e comandos.

#### package.json
Arquivo que contém metadados de um projeto node, como nome, autor, descrição, licença, scripts do projeto, etc. Mas uma das principais funções dele é listar as dependencias do sistema, assim, quando for preciso instalar o que é preciso para tudo funcionar, é o package.json que assegura que todas as libs/módulos necessárias serão instaladas.

#### package-lock.json
Este é responsável por manter todas as dependências e subdependências na respectiva versão e configuração definida pelo dev, assim garantindo que a versão vai ser igual independente do ambiente onde está sendo desenvolvida. Dessa forma, ele evita problemas de incompatibilidade e evita que os pacotes atualizem inesperadamente.

#### README.md
Este arquivo do tipo markdown geralmente serve para documentar as informações essenciais do sistema, como descrições das funcionalidades, instruções de instalação, requisitos e exemplos de uso. Se um usuário quer conhecer o projeto, é o primeiro lugar que ele deve acessar.

Porém, neste projeto estou utilizando o README.md também para anotações e explicações do que está sendo usado no desenvolvimento, a fim de ter um lugar organizado para consulta posterior.

## Explicação de termos, padrões e nomes
#### LTS
LTS, ou Long Term Support (Suporte de Longo Prazo), são versões de software que os desenvolvedores da plataforma garantem que terão um suporte de longo prazo, ou seja, os códigos desenvolvidos com versões "LTS" recebem patches de correção/segurança e suporte atualizados durante um longo tempo. Esse tipo de versão é útil para criar projetos mais estáveis, por isso, utilizamos o **LTS hydrogen** no sistema.
