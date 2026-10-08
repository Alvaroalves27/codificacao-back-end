# API de Produtos - NestJS

API desenvolvida com **NestJS** para praticar a criação de serviços, controladores, rotas, parâmetros e tratamento de erros.

## 📌 Sobre o projeto

Este projeto apresenta uma API simples para consulta de produtos.

Os produtos são armazenados inicialmente em uma lista dentro do `ProdutosService`. A aplicação permite consultar todos os produtos e também buscar um produto específico pelo seu ID.

O projeto também possui tratamento de erros para situações em que o ID informado não é válido ou quando o produto não é encontrado.

## 🚀 Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* npm
* VS Code

## 📂 Estrutura principal

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── produtos.controller.ts
└── produtos.service.ts
```

### ProdutosService

O `ProdutosService` é responsável por armazenar os produtos e disponibilizar o método:

```typescript
listarProdutos()
```

Esse método retorna a lista de produtos cadastrados.

### ProdutosController

O `ProdutosController` é responsável pelas rotas relacionadas aos produtos.

A rota principal utilizada é:

```text
/produtos
```

Também existe uma rota para buscar um produto pelo ID:

```text
/produtos/:id
```

## 📦 Produtos cadastrados

Atualmente, a API possui os seguintes produtos:

| ID | Produto         |   Preço |
| -: | --------------- | ------: |
|  1 | Arroz Namorados | R$ 9,99 |
|  2 | Feijão Timbiras | R$ 7,99 |
|  3 | Macarrão Galo   | R$ 5,99 |
|  4 | Açúcar União    | R$ 4,99 |
|  5 | Sal Lebre       | R$ 2,99 |

## 🔗 Rotas da API

### Listar produtos

**Método:**

```http
GET /produtos
```

Retorna todos os produtos cadastrados.

### Buscar produto por ID

**Método:**

```http
GET /produtos/:id
```

Exemplo:

```http
GET /produtos/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Arroz Namorados",
  "preco": 9.99
}
```

## ⚠️ Tratamento de erros

A API possui tratamento para dois tipos de situações.

### ID inválido

Caso seja informado um valor que não seja numérico:

```http
GET /produtos/abc
```

A API retorna:

```json
{
  "statusCode": 400,
  "message": "O ID do produto deve ser um número inteiro.",
  "error": "Bad Request"
}
```

Nesse caso é utilizada a exceção:

```typescript
BadRequestException
```

### Produto não encontrado

Caso seja informado um ID que não existe:

```http
GET /produtos/100
```

A API retorna:

```json
{
  "statusCode": 404,
  "message": "Produto com ID 100 não encontrado.",
  "error": "Not Found"
}
```

Nesse caso é utilizada a exceção:

```typescript
NotFoundException
```

## 📝 Logs

O projeto utiliza o `Logger` do NestJS para registrar situações importantes.

Por exemplo, quando ocorre uma tentativa de busca com ID inválido:

```text
Tentativa de busca com ID abc não numérico.
```

Ou quando um produto não é encontrado:

```text
Produto com ID 100 não localizado.
```

Isso ajuda a acompanhar o funcionamento da aplicação e identificar possíveis problemas.

## ⚙️ Como executar o projeto

### 1. Instalar as dependências

No terminal do VS Code, execute:

```bash
npm install
```

### 2. Iniciar a aplicação

Execute:

```bash
npm run start:dev
```

A aplicação será iniciada na porta:

```text
http://localhost:3000
```

## 🧪 Testando a API

Depois de iniciar o projeto, é possível testar as rotas pelo navegador, Postman, Insomnia ou outra ferramenta para APIs.

### Listar todos os produtos

Acesse:

```text
http://localhost:3000/produtos
```

### Buscar o produto de ID 1

Acesse:

```text
http://localhost:3000/produtos/1
```

### Testar um ID inválido

Acesse:

```text
http://localhost:3000/produtos/abc
```

### Testar um produto inexistente

Acesse:

```text
http://localhost:3000/produtos/100
```

## 🎯 Objetivo da atividade

O objetivo desta atividade é praticar conceitos básicos do NestJS, como:

* Criação de `Controller`;
* Criação de `Service`;
* Injeção de dependências;
* Criação de rotas HTTP;
* Uso de parâmetros de rota;
* Busca de dados pelo ID;
* Tratamento de exceções;
* Utilização de logs;
* Organização de uma API.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido para fins de estudo e prática de desenvolvimento **Back-end com NestJS e TypeScript**.
