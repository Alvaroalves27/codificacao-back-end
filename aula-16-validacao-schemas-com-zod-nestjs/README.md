# 👥 API de Colaboradores

API REST construída com **NestJS** e validação de dados com **Zod**, usando um `ZodValidationPipe` customizado para validar o corpo das requisições e devolver erros claros em português.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e execução](#-instalação-e-execução)
- [Endpoints](#-endpoints)
- [Regras de validação](#-regras-de-validação)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Testes](#-testes)
- [Dicas para o VS Code](#-dicas-para-o-vs-code)

---

## 📌 Sobre o projeto

Este projeto demonstra como integrar o **Zod** ao **NestJS** para validar dados de entrada de forma tipada e segura. O fluxo é:

1. O cliente envia um `POST /colaboradores` com os dados do colaborador.
2. O `ZodValidationPipe` valida o corpo da requisição com o `colaboradorSchema`.
3. Se for válido, a API responde com sucesso; caso contrário, retorna `400 Bad Request` listando cada campo inválido.

O tipo `Colaborador` é inferido diretamente do schema (`z.infer`), garantindo que **validação e tipagem nunca fiquem fora de sincronia**.

---

## 🛠 Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [NestJS](https://nestjs.com/) | Framework backend |
| [TypeScript](https://www.typescriptlang.org/) | Linguagem |
| [Zod](https://zod.dev/) (v4) | Validação e inferência de tipos |
| [Jest](https://jestjs.io/) | Testes unitários |

> ℹ️ O projeto usa **ESM** (imports com extensão `.js`) e `z.email()`, que exige **Zod v4**.

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (ou yarn/pnpm)
- [VS Code](https://code.visualstudio.com/) (recomendado)

---

## 🚀 Instalação e execução

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd <nome-da-pasta>

# 2. Instale as dependências
npm install

# 3. Inicie em modo desenvolvimento (hot reload)
npm run start:dev
```

A API ficará disponível em **http://localhost:3000**.

Para usar outra porta:

```bash
# Linux / macOS
PORT=4000 npm run start:dev

# Windows (PowerShell)
$env:PORT=4000; npm run start:dev
```

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia com *watch mode* |
| `npm run build` | Compila para `dist/` |
| `npm run start:prod` | Executa a versão compilada |
| `npm run test` | Roda os testes unitários |

---

## 🔌 Endpoints

### `GET /`

Rota de verificação (health check simples).

**Resposta `200 OK`**

```
Hello World!
```

### `POST /colaboradores`

Cadastra um colaborador após validar os dados.

**Body (JSON)**

```json
{
  "nome": "Maria Silva",
  "email": "maria.silva@empresa.com",
  "idade": 28,
  "departamento": "TI"
}
```

**Resposta `201 Created`**

```json
{
  "mensagem": "Colaborador cadastrado com sucesso",
  "dados": {
    "nome": "Maria Silva",
    "email": "maria.silva@empresa.com",
    "idade": 28,
    "departamento": "TI"
  }
}
```

**Resposta de erro `400 Bad Request`**

Requisição:

```json
{
  "nome": "Jo",
  "email": "email-invalido",
  "idade": 17,
  "departamento": "Vendas"
}
```

Resposta:

```json
{
  "statusCode": 400,
  "erros": [
    { "campo": "nome", "mensagem": "O nome deve ter no mínimo 3 letras!" },
    { "campo": "email", "mensagem": "O email deve ser válido!" },
    { "campo": "idade", "mensagem": "A idade minima permitida é 18 anos!" },
    {
      "campo": "departamento",
      "mensagem": "Departamento deve ser obrigatorimente TI, RH, Comercial ou Financeiro"
    }
  ]
}
```

---

## 📏 Regras de validação

Definidas em `src/colaborador.schema.ts`:

| Campo | Tipo | Regras |
| --- | --- | --- |
| `nome` | `string` | Mínimo de 3 caracteres |
| `email` | `string` | Deve ser um e-mail válido |
| `idade` | `number` | Entre **18** e **65** anos |
| `departamento` | `enum` | `TI`, `RH`, `Comercial` ou `Financeiro` |

---

## 📂 Estrutura do projeto

```
src/
├── app.controller.spec.ts      # Teste do AppController
├── app.controller.ts           # Rota GET /
├── app.module.ts               # Módulo raiz
├── app.service.ts              # Serviço com a mensagem "Hello World!"
├── colaborador.schema.ts       # Schema Zod + tipo Colaborador
├── colaboradores.controller.ts # Rota POST /colaboradores
├── zod-validation.pipe.ts      # Pipe de validação customizado
└── main.ts                     # Ponto de entrada (bootstrap)
```

### Como o pipe funciona

```ts
@Post()
@UsePipes(new ZodValidationPipe(colaboradorSchema))
async create(@Body() body: Colaborador) { /* ... */ }
```

O `ZodValidationPipe` recebe qualquer schema Zod, valida apenas o `body` e lança uma `BadRequestException` com a lista de erros formatada (`campo` + `mensagem`). Assim, ele é **reutilizável** em qualquer outro controller.

---

## 🧪 Testes

```bash
npm run test
```

---

## 💻 Dicas para o VS Code

### Extensões recomendadas

Crie o arquivo `.vscode/extensions.json` para sugerir as extensões a quem abrir o projeto:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "humao.rest-client",
    "orta.vscode-jest",
    "usernamehw.errorlens"
  ]
}
```

### Testando a API sem sair do editor

Com a extensão **REST Client** instalada, crie um arquivo `requests.http` na raiz e clique em **Send Request**:

```http
### Health check
GET http://localhost:3000

### Cadastro válido
POST http://localhost:3000/colaboradores
Content-Type: application/json

{
  "nome": "Maria Silva",
  "email": "maria.silva@empresa.com",
  "idade": 28,
  "departamento": "TI"
}

### Cadastro inválido (deve retornar 400)
POST http://localhost:3000/colaboradores
Content-Type: application/json

{
  "nome": "Jo",
  "email": "email-invalido",
  "idade": 17,
  "departamento": "Vendas"
}
```

### Debug com breakpoints

Crie `.vscode/launch.json` para depurar o NestJS com `F5`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug NestJS",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "start:debug"],
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

### Atalhos úteis

| Atalho | Ação |
| --- | --- |
| `Ctrl + '` | Abrir/fechar o terminal integrado |
| `Ctrl + Shift + B` | Executar tarefas de build |
| `F5` | Iniciar o debug |
| `Ctrl + Shift + V` | Visualizar este README formatado |

---

## 🗺 Próximos passos

- [ ] Persistir os colaboradores em um banco de dados (Prisma / TypeORM)
- [ ] Adicionar `GET`, `PUT` e `DELETE` em `/colaboradores`
- [ ] Documentar a API com Swagger (`@nestjs/swagger`)
- [ ] Adicionar testes para o `ZodValidationPipe` e o `ColaboradoresController`

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.