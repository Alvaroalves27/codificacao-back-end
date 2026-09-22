# 🚨 Tratamento de Erros com Express

Projeto desenvolvido em **Node.js** utilizando o framework **Express** para demonstrar o tratamento de erros **síncronos e assíncronos**, além do monitoramento de exceções e rejeições de Promises.

## 🚀 Tecnologias

* **JavaScript**
* **Node.js**
* **Express**
* **ES Modules**

## 📚 Conceitos abordados

Neste projeto são praticados os seguintes conceitos:

* Criação de servidor com Express
* Middleware `express.json()`
* Tratamento de erros síncronos
* Tratamento de erros assíncronos
* Middleware global de tratamento de erros
* `uncaughtException`
* `unhandledRejection`
* Uso do `next()` para encaminhar erros
* Respostas HTTP em formato JSON
* Código de status HTTP `500`

## 📁 Estrutura do projeto

```text
tratamento-erros-express/
│
├── index.js
├── package.json
└── README.md
```

## ⚙️ Funcionamento

A aplicação cria um servidor Express na porta **3000** e disponibiliza diferentes rotas para demonstrar situações de sucesso e de erro.

### ✅ Rota de sucesso

```http
GET /sucesso
```

Retorna uma resposta JSON indicando que a operação foi realizada com sucesso.

### ❌ Erro síncrono

```http
GET /erro-sincrono
```

Simula uma falha em uma regra de negócio utilizando `throw new Error()`.

O erro é capturado pelo `try...catch` e encaminhado para o middleware de tratamento através do `next()`.

### ⚠️ Erro assíncrono

```http
GET /erro-assincrono
```

Simula uma falha em uma operação assíncrona, como uma consulta a um banco de dados externo.

A rejeição da Promise é capturada pelo `try...catch` e encaminhada para o middleware de erro.

## 🛡️ Middleware global de erros

O projeto possui um middleware específico para centralizar o tratamento dos erros:

```javascript
app.use((err, req, res, next) => {
    console.error(`[LOG DE ERRO INTERNO]: ${err.stack}`);

    const status = err.status || 500;

    res.status(status).json({
        succss: false,
        message: err.message || 'Erro interno do Servidor'
    });
});
```

Esse middleware:

* Registra o erro no console;
* Obtém o status HTTP do erro;
* Utiliza `500` quando nenhum status é informado;
* Retorna uma resposta JSON para o cliente.

## 🔍 Monitoramento de erros do processo

O projeto também utiliza eventos do Node.js para monitorar erros que não foram tratados diretamente pela aplicação.

### `uncaughtException`

```javascript
process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ', err.message);
});
```

É utilizado para registrar exceções que não foram capturadas.

### `unhandledRejection`

```javascript
process.on('unhandledRejection', (reason) => {
    console.error('[PROMISE REJEITADA - unhandledRejection]: ', reason);
});
```

É utilizado para registrar Promises rejeitadas que não possuem tratamento.

## ▶️ Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor

```bash
node index.js
```

Se estiver utilizando um script `start` no `package.json`, também pode executar:

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## 🧪 Testando as rotas

Você pode testar as rotas utilizando o navegador, **Postman**, **Insomnia** ou outra ferramenta para requisições HTTP.

### Sucesso

```text
http://localhost:3000/sucesso
```

### Erro síncrono

```text
http://localhost:3000/erro-sincrono
```

### Erro assíncrono

```text
http://localhost:3000/erro-assincrono
```

## 🎯 Objetivo

O objetivo deste projeto é compreender como realizar o **tratamento e monitoramento de erros em aplicações Node.js com Express**, utilizando boas práticas para capturar falhas síncronas e assíncronas e fornecer respostas adequadas ao cliente.

## 📌 Observação

Em aplicações reais, o tratamento de erros deve ser planejado de forma que os erros sejam registrados adequadamente e o servidor permaneça seguro e previsível.

---

**Projeto desenvolvido para estudos de Node.js e Express.**
