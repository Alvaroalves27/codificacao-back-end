# 🎟️ API de Convidados — NestJS

Projeto desenvolvido durante os estudos de **NestJS**, com o objetivo de praticar a criação de uma API REST para gerenciamento de convidados.

A aplicação utiliza **Controllers, Services, DTOs e exceções HTTP** para realizar operações de consulta, cadastro, atualização e remoção de convidados.

## 🚀 Tecnologias

* **Node.js**
* **TypeScript**
* **NestJS**
* **HTTP / REST**
* **npm**

## 📚 Funcionalidades

A API permite:

* Listar todos os convidados;
* Cadastrar um novo convidado;
* Atualizar a idade de um convidado;
* Remover um convidado;
* Buscar um convidado pelo ID;
* Retornar erro `404 Not Found` quando o convidado não existe;
* Utilizar códigos de status HTTP adequados nas requisições.

## 📁 Estrutura

```text
├── app.module.ts
├── convidados.controller.ts
├── convidados.service.ts
└── criar-convidado.dto.ts
```

## 🔗 Rotas da API

### GET `/convidados`

Lista todos os convidados cadastrados.

### POST `/convidados`

Cadastra um novo convidado.

Exemplo de corpo da requisição:

```json
{
  "nome": "Carlos",
  "idade": 25
}
```

### PATCH `/convidados/:id`

Atualiza a idade de um convidado.

Exemplo:

```text
PATCH /convidados/1
```

Corpo:

```json
{
  "idade": 21
}
```

### DELETE `/convidados/:id`

Remove um convidado da lista.

Exemplo:

```text
DELETE /convidados/1
```

A operação retorna o status HTTP `204 No Content` quando realizada com sucesso.

## ⚠️ Tratamento de Erros

A aplicação utiliza `NotFoundException` do NestJS para informar quando um convidado não foi encontrado.

Exemplo:

```text
[ADMINISTRADOR] convidado com ID 10 não encontrado!
```

Nesse caso, a API retorna o status:

```text
404 Not Found
```

## 🧩 Conceitos Praticados

Nesta aula foram praticados conceitos importantes do NestJS:

* `@Controller()`
* `@Get()`
* `@Post()`
* `@Patch()`
* `@Delete()`
* `@Param()`
* `@Body()`
* `@HttpCode()`
* `@Injectable()`
* Injeção de dependências
* Services
* Controllers
* DTOs
* Exceções HTTP
* Status codes
* Métodos HTTP REST

## 🎯 Objetivo da Aula

Praticar a construção de uma API REST utilizando a arquitetura do **NestJS**, separando as responsabilidades entre Controller e Service e trabalhando com diferentes métodos HTTP.

## ▶️ Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

Depois, acesse a API utilizando:

```text
http://localhost:3000/convidados
```

## 👨‍💻 Autor

**Álvaro Alves**

Projeto desenvolvido para fins de estudo em **Programação Full Stack**.
