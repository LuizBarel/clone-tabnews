# clone-tabnews
Criação de um projeto clone do site TabNews com fins de estudos.

Este arquivo README terá explicações sobre o projeto em si, informações de cada arquivo e sobre termos e padrões utilizados. Tudo para registrar o conhecimento adquirido ao longo do desenvolvimento.

## Tópicos
- O que é o projeto?
- Tecnologias
- Explicação de cada arquivo
- Explicação de termos, padrões e nomes
- Links

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
Pasta onde estão alguns arquivos de configuração do projeto e as pastas que compoe todo o site.

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

#### .gitignore
O arquivo .gitignore é usado para informar ao Git quais arquivos ou pastas devem ser ignorados no versionamento. Isso significa que o Git não rastreará nem incluirá esses itens em commits, como se eles não existissem para ele. Dessa forma, é possível proteger informações sensíveis, e evitar o registro de arquivos gerados automaticamente, no nosso caso, as pastas node_modules e .next.

### Pasta pages
É a pasta onde ficará todas as páginas do site, e ela define automaticamente que, qualquer arquivo JS/TS aqui, é uma página.

#### index.js
É a página inicial do projeto, tem esse nome pois, por convenção, toda página inicial se chama index (isso vem de antigamente, onde os websites possuiam uma página que recebia o usuário contendo links para o restante das páginas).

## Explicação de termos, padrões e nomes
#### LTS
LTS, ou Long Term Support (Suporte de Longo Prazo), são versões de software que os desenvolvedores da plataforma garantem que terão um suporte de longo prazo, ou seja, os códigos desenvolvidos com versões "LTS" recebem patches de correção/segurança e suporte atualizados durante um longo tempo. Esse tipo de versão é útil para criar projetos mais estáveis, por isso, utilizamos o **LTS hydrogen** no sistema.

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
| Protocolo | Uso                                       | Exemplos                        |
|-----------|-------------------------------------------|---------------------------------|
| TCP       | Pacotes enviados totalmente, sem perda e na ordem correta | Mensagens, arquivos             |
| UDP       | Pacotes não precisam chegar na íntegra    | Chamadas em vídeo, jogos digitais |

**Curiosidade:** O lag ocorre por causa da perda de pacotes e da forma como o UDP ignora esse problema.


Resumindo: TCP: mais confiabilidade, menos velocidade, UDP: mais velocidade, menos confiabilidade.
#### IP (Internet Protocol)
Protocolo responsável por direcionar, encaminhar e rotear os pacotes de dados para o destino correto através da rede.
Geralmente usado com o TCP, formando o protocolo TCP/IP.

### File-based Routing
É uma forma de definir as rotas do projeto, onde cada arquivo dentro de uma pasta (no nosso caso atual, a pages) se torna uma rota, ou seja, a estrutura do diretório "pages" é a estrutura das URLs de cada página do site. Dessa forma não é necessário criar cada rota manualmente em algum arquivo.
- Obs.: existe uma outro diretório que pode ser usado para o mesmo fim, chamado de "app".

## Links
Alguns links que usei para estudar ou complementar este arquivo (ou que não foram temas abordados diretamente no curso.dev).

#### Protocolos
- [Protocolos no geral](https://www.hostmidia.com.br/blog/protocolos-de-internet/)
- [Modelo OSI e TCP/IP](https://www.azion.com/pt-br/blog/modelo-osi-modelo-tcp-ip-importancia-dos-padroes-para-redes-e-internet/)
- [UDP vs TCP](https://youtu.be/ZEEBsq3eQmg)