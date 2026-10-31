# 🎓 API de Gerenciamento de Alunos

## 📚 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma API REST para gerenciamento de alunos, utilizando o framework **NestJS** integrado ao banco de dados **MongoDB** por meio da biblioteca **Mongoose**.

A aplicação permite realizar operações de cadastro, consulta, atualização e exclusão de alunos, aplicando validações de dados com DTOs e decorators da biblioteca `class-validator`.

O projeto tem como objetivo praticar os conceitos de desenvolvimento Back-End, arquitetura modular, persistência de dados e construção de APIs REST.

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **NestJS** – Framework para desenvolvimento Back-End.
- **TypeScript** – Linguagem utilizada no desenvolvimento.
- **MongoDB** – Banco de dados NoSQL.
- **Mongoose** – Integração entre NestJS e MongoDB.
- **Class Validator** – Validação dos dados recebidos pela API.
- **Class Transformer** – Transformação de dados durante o processo de validação.

## ⚙️ Funcionalidades

A API disponibiliza operações CRUD (*Create, Read, Update e Delete*) para gerenciamento dos alunos.

| Método HTTP | Rota | Funcionalidade |
|---|---|---|
| POST | `/alunos` | Cadastrar um aluno |
| GET | `/alunos` | Listar todos os alunos |
| GET | `/alunos/:id` | Buscar aluno pelo ID |
| PATCH | `/alunos/:id` | Atualizar dados de um aluno |
| DELETE | `/alunos/:id` | Remover um aluno |

## 📝 Estrutura dos Dados

Cada aluno possui os seguintes atributos:

| Campo | Tipo | Descrição |
|---|---|---|
| nome | String | Nome do aluno |
| idade | Number | Idade do aluno |
| matricula | String | Matrícula única do aluno |
| cursos | String[] | Lista de cursos do aluno |

## 🛡️ Validação de Dados

O projeto utiliza DTOs (*Data Transfer Objects*) para garantir que os dados recebidos pela API estejam de acordo com as regras estabelecidas.

As validações implementadas incluem:

- `@IsString()` – Verifica se o valor é uma string.
- `@IsNotEmpty()` – Impede o envio de valores vazios.
- `@IsInt()` – Verifica se a idade é um número inteiro.
- `@Min(0)` – Impede valores