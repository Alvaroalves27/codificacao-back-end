# 🎮 API de Jogos

API REST desenvolvida com **NestJS** e **TypeScript** para consultar informações de jogos através do seu ID.

---

## 📋 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar os principais conceitos do **NestJS**, como:

* Controllers
* Services
* Injeção de dependências
* Rotas HTTP
* Parâmetros de URL
* `ParseIntPipe`
* Tratamento de exceções
* Organização de uma API REST

A aplicação possui uma lista de jogos cadastrados e permite buscar um jogo específico através do seu ID.

---

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **REST API**

---

## 📁 Estrutura do projeto

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── jogos.controller.ts
└── jogos.service.ts
```

### 📌 `jogos.service.ts`

Responsável por armazenar os jogos e realizar a busca pelo ID.

### 📌 `jogos.controller.ts`

Responsável por receber as requisições HTTP e encaminhá-las para o `JogosService`.

### 📌 `app.module.ts`

Responsável por registrar os controllers e services utilizados pela aplicação.

---

## 🎮 Jogos cadastrados

| ID | Título                               | Estúdio             |
| -: | ------------------------------------ | ------------------- |
|  1 | Minecraft                            | Mojang Studio       |
|  2 | The Legend of Zelda: Ocarina of Time | Nintendo            |
|  3 | Grand Theft Auto V                   | Rockstar North      |
|  4 | Elden Ring                           | FromSoftware        |
|  5 | God of War                           | Santa Monica Studio |

---

## 🚀 Como executar o projeto

### 1. Instale o Node.js

É necessário ter o **Node.js** instalado no computador.

Depois, verifique a instalação:

```bash
node -v
```

E também:

```bash
npm -v
```

---

### 2. Instale as dependências

Abra o terminal do VS Code na pasta do projeto e execute:

```bash
npm install
```

---

### 3. Execute a aplicação

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

Se tudo estiver correto, a aplicação será executada em:

```text
http://localhost:3000
```

---

## 🔎 Endpoints

### Buscar jogo por ID

**Método:**

```http
GET
```

**Rota:**

```text
/jogos/:id
```

### Exemplo

Para buscar o jogo com ID `1`:

```text
GET http://localhost:3000/jogos/1
```

### Resposta

```json
{
  "id": 1,
  "titulo": "Minecraft",
  "estudio": "Mojang Studio"
}
```

---

## 🎮 Outros exemplos

### Buscar Elden Ring

```text
GET http://localhost:3000/jogos/4
```

Resposta:

```json
{
  "id": 4,
  "titulo": "Elden Ring",
  "estudio": "FromSoftware"
}
```

### Buscar God of War

```text
GET http://localhost:3000/jogos/5
```

Resposta:

```json
{
  "id": 5,
  "titulo": "God of War",
  "estudio": "Santa Monica Studio"
}
```

---

## ❌ Tratamento de erro

Caso o usuário informe um ID que não existe, a API retorna o status **404 - Not Found**.

### Exemplo

```text
GET http://localhost:3000/jogos/10
```

Resposta:

```json
{
  "statusCode": 404,
  "message": "Jogo com ID 10 nao localizado em nosso estoque.",
  "error": "Not Found"
}
```

Esse tratamento é realizado utilizando o `NotFoundException` do NestJS.

---

## 🔄 Fluxo da aplicação

```text
Cliente
   │
   │ GET /jogos/1
   ▼
JogosController
   │
   │ recebe o ID
   ▼
JogosService
   │
   │ procura o jogo
   ▼
Lista de jogos
   │
   ├── Jogo encontrado
   │       │
   │       ▼
   │   Retorna os dados
   │
   └── Jogo não encontrado
           │
           ▼
       Retorna erro 404
```

---

## 🧩 Principais recursos utilizados

### `@Controller()`

Define o controller responsável pelas rotas de jogos.

```typescript
@Controller('jogos')
```

---

### `@Get()`

Define uma rota HTTP do tipo `GET`.

```typescript
@Get(':id')
```

---

### `@Param()`

Obtém o parâmetro enviado pela URL.

```typescript
@Param('id', ParseIntPipe)
```

---

### `ParseIntPipe`

Converte o ID recebido na URL para um número inteiro.

Isso permite trabalhar com o ID corretamente dentro do service.

---

### `NotFoundException`

É utilizado quando o jogo solicitado não existe.

```typescript
throw new NotFoundException(
  `Jogo com ID ${id} n
```
