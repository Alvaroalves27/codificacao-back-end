# Sistema de Logs

Projeto desenvolvido em **Node.js** para registrar mensagens do sistema em um arquivo de log.

## Tecnologias

* JavaScript
* Node.js
* ES Modules

## Funcionalidades

* Criação automática da pasta `Logs`
* Criação do arquivo `syslog.log`
* Registro de mensagens
* Registro automático de data e hora
* Tratamento de erros

## Estrutura

```text
projeto/
├── Logs/
│   └── syslog.log
├── index.js
└── utilitario.js
```

## Funcionamento

O sistema recebe uma mensagem e salva no arquivo `syslog.log`.

Cada registro contém:

* Data
* Hora
* Mensagem

### Exemplo

```text
[2026-09-14 - 20:42:00]: Inicialização do servidor concluida!
[2026-09-14 - 20:42:01]: Conexão com o banco de dados estabelecida!
```

## Objetivo

Praticar:

* Manipulação de arquivos com Node.js
* Funções assíncronas
* Uso de módulos
* Organização de código
* Registro de logs
