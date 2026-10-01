# Aula 12 — Middleware e Controle de Acesso com NestJS

Projeto desenvolvido durante a Aula 12 para aprender a utilização de **Middleware no NestJS**, registro de requisições e controle de acesso a rotas administrativas.

---

## 📌 Sobre o Projeto

A aplicação possui duas rotas principais:

* **`/`** → rota pública, acessível normalmente.
* **`/admin`** → rota protegida, acessível somente quando o usuário informa o perfil `Administrator`.

O projeto utiliza um **Middleware** para analisar cada requisição antes que ela chegue ao Controller.

O Middleware também registra no console o **método HTTP** e a **rota acessada**.

---

## 🎯 Objetivos

* Aprender o funcionamento de Middleware no NestJS.
* Utilizar `NestMiddleware`.
* Interceptar requisições HTTP.
* Identificar método e rota acessada.
* Trabalhar com Headers HTTP.
* Criar uma regra simples de autorização.
* Utilizar o status HTTP `403 Forbidden`.
* Criar rotas públicas e protegidas.
* Aplicar Middleware globalmente às rotas.
* Criar testes unitários com Jest.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **Express**
* **Jest**

---

## 📁 Estrutura do Projeto

```text
src/
│
├── logger/
│   ├── logger.middleware.ts
│   └── logger.middleware.spec.ts
│
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

### Arquivos principais

| Arquivo                     | Função                                                   |
| --------------------------- | -------------------------------------------------------- |
| `main.ts`                   | Inicializa a aplicação                                   |
| `app.module.ts`             | Configura o módulo principal e o Middleware              |
| `app.controller.ts`         | Define as rotas da aplicação                             |
| `app.service.ts`            | Contém o serviço padrão do NestJS                        |
| `logger.middleware.ts`      | Registra requisições e controla o acesso à rota `/admin` |
| `logger.middleware.spec.ts` | Testa a existência do Middleware                         |
| `app.controller.spec.ts`    | Arquivo de testes do Controller                          |

---

# 🔐 Middleware

O Middleware utilizado no projeto é o:

```text
LoggerMiddleware
```

Ele implementa:

```typescript
NestMiddleware
```

Sua principal função é executar uma lógica **antes do Controller processar a requisição**.

### Funcionamento

```text
Cliente
   ↓
Requisição HTTP
   ↓
LoggerMiddleware
   ↓
Verifica a requisição
   ↓
┌─────────────────────┐
│ É uma rota /admin?  │
└──────────┬──────────┘
           │
      ┌────┴────┐
      │         │
     NÃO       SIM
      │         │
      ↓         ↓
 Continua   Verifica
            x-user-base
                │
          ┌─────┴─────┐
          │           │
     Administrator   Outro
          │           │
          ↓           ↓
      Permite       403
          │
          ↓
      Controller
```

---

# 📝 Logger

O Middleware registra no console informações da requisição:

```typescript
console.log(
  `[LOG] Método: ${req.method} | Rota: ${req.path}`
);
```

Exemplo:

```text
[LOG] Método: GET | Rota: /
```

Ou:

```text
[LOG] Método: GET | Rota: /admin
```

---

# 👤 Controle de Acesso

A rota `/admin` possui uma verificação de acesso.

O Middleware verifica o Header:

```http
x-user-base
```

Para acessar a área administrativa, o valor precisa ser:

```text
Administrator
```

### Exemplo autorizado

```http
GET /admin
x-user-base: Administrator
```

Nesse caso:

```text
Requisição
    ↓
Middleware
    ↓
x-user-base = Administrator
    ↓
Acesso permitido
    ↓
Controller
    ↓
Resposta
```

---

# 🚫 Acesso Negado

Caso o usuário tente acessar `/admin` sem possuir o perfil correto, o Middleware retorna:

```http
403 Forbidden
```

Exemplo:

```http
GET /admin
x-user-base: User
```

Resposta:

```json
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Previlégiado de Administrator necessário",
  "registro": "2026-09-30T00:00:00.000Z"
}
```

O status `403` significa que o servidor entendeu a requisição, porém o acesso ao recurso não foi autorizado.

---

# 🌐 Rotas da Aplicação

## 🟢 Rota Pública

### Endpoint

```http
GET /
```

Essa rota pode ser acessada normalmente.

### Resposta

```json
{
  "mensagem": "Rota Publica acessa com sucesso!",
  "data": "2026-09-30T00:00:00.000Z"
}
```

---

## 🔴 Rota Administrativa

### Endpoint

```http
GET /admin
```

Essa rota necessita do Header:

```http
x-user-base: Administrator
```

### Requisição autorizada

```http
GET /admin
x-user-base: Administrator
```

### Resposta

```json
{
  "mensagem": "Bem-vindo ao painel Administrativo",
  "data": "2026-09-30T00:00:00.000Z"
}
```

---

# ⚙️ Configuração do Middleware

O Middleware é aplicado no `AppModule`:

```typescript
consumer
  .apply(LoggerMiddleware)
  .forRoutes('*');
```

O:

```text
forRoutes('*')
```

faz com que o Middleware seja executado para todas as rotas da aplicação.

Portanto:

```text
GET /
     ↓
LoggerMiddleware
     ↓
AppController
```

e:

```text
GET /admin
     ↓
LoggerMiddleware
     ↓
Verificação de acesso
     ↓
AppController
```

---

# 📦 Instalação

Primeiro, instale as dependências do projeto:

```bash
npm install
```

---

# ▶️ Executando o Projeto

Para iniciar a aplicação em modo desenvolvimento:

```bash
npm run start:dev
```

Depois, acesse:

```text
http://localhost:3000
```

---

# 🧪 Testes

Para executar os testes:

```bash
npm run test
```

Para executar os testes observando alterações:

```bash
npm run test:watch
```

Para verificar a cobertura dos testes:

```bash
npm run test:cov
```

---

# 🧪 Teste do Middleware

O projeto possui um teste para verificar se o Middleware está sendo criado corretamente.

```typescript
describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});
```

Esse teste confirma que uma instância de `LoggerMiddleware` pode ser criada.

---

# 🧪 Teste do Controller

O projeto também possui a estrutura padrão de testes do NestJS para o Controller.

O teste cria um `TestingModule` contendo:

```typescript
controllers: [AppController],
providers: [AppService],
```

Depois, obtém uma instância do Controller:

```typescript
appController = app.get<AppController>(AppController);
```

---

# 📡 Testando com Insomnia ou Postman

Também é possível testar as rotas utilizando ferramentas como:

* Insomnia
* Postman
* Thunder Client
* Navegador, para a rota pública

### Teste 1 — Rota pública

```http
GET http://localhost:3000/
```

Resultado esperado:

```text
Rota pública acessada com sucesso.
```

### Teste 2 — Admin autorizado

```http
GET http://localhost:3000/admin
```

Header:

```text
x-user-base: Administrator
```

Resultado esperado:

```text
Bem-vindo ao painel Administrativo
```

### Teste 3 — Admin sem autorização

```http
GET http://localhost:3000/admin
```

Header:

```text
x-user-base: User
```

Resultado esperado:

```http
403 Forbidden
```

---

# 🔄 Fluxo da Aplicação

```text
                    CLIENTE
                       │
                       ↓
                Requisição HTTP
                       │
                       ↓
             LoggerMiddleware
                       │
              ┌────────┴────────┐
              │                 │
           Rota /           Rota /admin
              │                 │
              ↓                 ↓
          Continua        Verifica Header
                                │
                    ┌───────────┴───────────┐
                    │                       │
          Administrator                  Outro
                    │                       │
                    ↓                       ↓
              Acesso OK                  HTTP 403
                    │
                    ↓
               Controller
                    │
                    ↓
                Resposta
```

---

# 📚 Conceitos Importantes

### Middleware

É uma função executada durante o processamento da requisição, antes de ela chegar ao Controller.

### Header

São informações enviadas junto com uma requisição HTTP.

Neste projeto:

```text
x-user-base
```

é utilizado para informar o perfil do usuário.

### Controller

É responsável por receber as requisições e definir as respostas das rotas.

### `403 Forbidden`

Indica que o servidor recusou o acesso ao recurso solicitado.

### `NestMiddleware`

Interface utilizada para criar Middlewares no NestJS.

### `MiddlewareConsumer`

Utilizado para configurar quais rotas utilizarão determinado Middleware.

---

# 🎓 Resultado da Aula

Ao final do projeto, foi implementado um sistema básico capaz de:

* Registrar requisições.
* Identificar método HTTP.
* Identificar a rota acessada.
* Aplicar Middleware às rotas.
* Criar uma rota pública.
* Criar uma rota administrativa.
* Verificar o perfil através de Header.
* Bloquear usuários não autorizados.
* Retornar `403 Forbidden`.
* Criar testes básicos com Jest.

---

## 📌 Comandos Principais

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run start:dev

# Executar testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Verificar cobertura
npm run test:cov
```

---

## 👨‍💻 Projeto

**Aula 12 — Middleware e Controle de Acesso**

Desenvolvido para estudos de **Back-end com NestJS, TypeScript e Express**.
