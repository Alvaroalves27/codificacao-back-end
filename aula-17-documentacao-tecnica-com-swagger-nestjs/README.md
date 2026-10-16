# 📦 API de Produtos

API REST desenvolvida com **NestJS** e documentada com **Swagger (OpenAPI)** para o cadastro de produtos em estoque.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e execução](#-instalação-e-execução)
- [Documentação Swagger](#-documentação-swagger)
- [Endpoints](#-endpoints)
- [Modelo de dados (DTO)](#-modelo-de-dados-dto)
- [Exemplos de uso](#-exemplos-de-uso)
- [Próximos passos](#-próximos-passos)

---

## 📖 Sobre o projeto

Esta API permite **cadastrar novos produtos no estoque**, recebendo nome, preço e categoria. O projeto serve como base para um sistema de controle de estoque e segue a arquitetura modular do NestJS (Module → Controller → DTO).

> ⚠️ **Status atual:** a resposta do cadastro ainda é simulada (o `id` é fixo e não há persistência em banco de dados).

---

## 🛠 Tecnologias

| Tecnologia | Uso |
| ---------- | --- |
| [Node.js](https://nodejs.org/) | Ambiente de execução |
| [NestJS](https://nestjs.com/) | Framework back-end |
| [TypeScript](https://www.typescriptlang.org/) | Linguagem |
| [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) | Documentação interativa da API |

---

## 📁 Estrutura de pastas

```text
src/
├── app.module.ts                  # Módulo raiz da aplicação
├── main.ts                        # Ponto de entrada (bootstrap + Swagger)
└── produtos/
    ├── produtos.controller.ts     # Rotas de produtos
    └── dto/
        └── criar-produto.dto.ts   # Contrato de entrada do cadastro
```

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- **npm**, **yarn** ou **pnpm**
- (Opcional) [Nest CLI](https://docs.nestjs.com/cli/overview): `npm i -g @nestjs/cli`

---

## 🚀 Instalação e execução

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd <nome-da-pasta>

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento (hot reload)
npm run start:dev
```

Outros comandos úteis:

```bash
npm run start        # execução normal
npm run start:prod   # execução em produção (requer build)
npm run build        # gera a pasta dist/
```

A aplicação ficará disponível em **http://localhost:3000**.

---

## 📚 Documentação Swagger

Com a aplicação rodando, acesse a documentação interativa:

👉 **http://localhost:3000/api**

> O caminho acima depende da configuração do Swagger no `main.ts`. Exemplo de configuração:
>
> ```typescript
> import { NestFactory } from '@nestjs/core';
> import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
> import { AppModule } from './app.module.js';
>
> async function bootstrap() {
>   const app = await NestFactory.create(AppModule);
>
>   const config = new DocumentBuilder()
>     .setTitle('API de Produtos')
>     .setDescription('Cadastro de produtos em estoque')
>     .setVersion('1.0')
>     .build();
>
>   const document = SwaggerModule.createDocument(app, config);
>   SwaggerModule.setup('api', app, document);
>
>   await app.listen(3000);
> }
> bootstrap();
> ```

---

## 🔌 Endpoints

| Método | Rota        | Descrição                            | Status de retorno |
| ------ | ----------- | ------------------------------------ | ----------------- |
| `POST` | `/Produtos` | Cadastra um novo produto no estoque  | `201`, `400`      |

---

## 🧾 Modelo de dados (DTO)

### `CriarProdutoDto`

| Campo       | Tipo     | Obrigatório | Descrição                          | Exemplo                    |
| ----------- | -------- | :---------: | ---------------------------------- | -------------------------- |
| `nome`      | `string` | ✅          | Nome comercial do produto          | `Café Grão de Ouro 500g`   |
| `preco`     | `number` | ✅          | Preço unitário do produto          | `9.99`                     |
| `categoria` | `string` | ✅          | Categoria do produto               | `Alimentos`                |

---

## 💡 Exemplos de uso

### Requisição

```http
POST /Produtos
Content-Type: application/json
```

```json
{
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos"
}
```

### Resposta — `201 Created`

```json
{
  "id": 67,
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos",
  "criadoEm": "16/10/2026"
}
```

### Resposta — `400 Bad Request`

Retornada quando o payload enviado contém dados mal formatados ou inválidos.

### Com cURL

```bash
curl -X POST http://localhost:3000/Produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Café Grão de Ouro 500g","preco":9.99,"categoria":"Alimentos"}'
```

---

## 🧭 Próximos passos

- [ ] Adicionar validação com `class-validator` e `ValidationPipe`
- [ ] Criar um `ProdutosService` e mover a lógica para fora do controller
- [ ] Integrar um banco de dados (TypeORM, Prisma ou Mongoose)
- [ ] Gerar `id` automaticamente (em vez do valor fixo)
- [ ] Implementar listagem, busca, atualização e remoção (CRUD completo)
- [ ] Escrever testes unitários e e2e

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar e modificar.