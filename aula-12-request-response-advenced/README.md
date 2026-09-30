# 🔐 API de Status e Área Secreta

API desenvolvida com **NestJS** e **TypeScript**, contendo uma rota pública para verificar o status do servidor e uma rota protegida por **API Key**.

## 🚀 Funcionalidades

* Verificação do status do servidor.
* Rota protegida por API Key.
* Validação de chave enviada pelo Header.
* Retorno de respostas em JSON.
* Uso de códigos HTTP `200` e `403`.
* Retorno de Header de autenticação após acesso autorizado.

## 🛠️ Tecnologias

* Node.js
* NestJS
* TypeScript
* Express

## 📂 Estrutura principal

```text
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── main.ts
└── seguranca.controller.ts
```

## 📌 Rota de Status

### GET `/status`

Essa rota verifica se o servidor está funcionando corretamente.

### Requisição

```http
GET http://localhost:3000/status
```

### Resposta

```text
Status: Servidor Ativo!
```

## 🔐 Área Secreta

### GET `/secret`

Essa rota possui uma proteção utilizando uma **API Key** enviada através do Header:

```text
y-api-key
```

### 🔑 Chave válida

```text
FULLSTACK-2026
```

## ✅ Acesso autorizado

### Requisição

```http
GET http://localhost:3000/secret
y-api-key: FULLSTACK-2026
```

### Status

```text
200 OK
```

### Resposta

```json
{
  "mensagem": "Acesso concedido a Área Secreta!"
}
```

Também é retornado o Header:

```text
y-auth-status: verificado
```

## ❌ Acesso negado

Caso a API Key esteja incorreta ou não seja enviada, a API retorna:

### Status

```text
403 Forbidden
```

### Resposta

```json
{
  "erro": "Forbidden",
  "mensagem": "Chave API inválida ou ausente",
  "log": "data atual"
}
```

## 📊 Rotas da API

| Método | Rota      | Descrição                     | Autenticação |
| ------ | --------- | ----------------------------- | ------------ |
| GET    | `/status` | Verifica o status do servidor | Não          |
| GET    | `/secret` | Acessa a área secreta         | API Key      |

## ▶️ Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo desenvolvimento:

```bash
npm run start:dev
```

A aplicação será executada em:

```text
http://localhost:3000
```

## 🧪 Testando no Insomnia, Postman ou Thunder Client

### Teste 1 — Status

```text
Método: GET
URL: http://localhost:3000/status
```

Resultado esperado:

```text
Status: Servidor Ativo!
```

### Teste 2 — Área Secreta

```text
Método: GET
URL: http://localhost:3000/secret
```

Adicione o Header:

```text
Nome: y-api-key
Valor: FULLSTACK-2026
```

Resultado esperado:

```json
{
  "mensagem": "Acesso concedido a Área Secreta!"
}
```

### Teste 3 — Chave inválida

Envie uma chave diferente:

```text
y-api-key: 123456
```

Resultado esperado:

```text
403 Forbidden
```

## 📚 Conceitos praticados

Este projeto demonstra os seguintes conceitos do NestJS:

* Controllers
* Services
* Modules
* Injeção de dependência
* Rotas HTTP
* Headers
* API Key
* Autorização
* Status HTTP
* Respostas JSON
* Testes unitários
* NestJS com Express
