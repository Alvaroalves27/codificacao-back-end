# 🌐 Servidor Web HTTP — Node.js

Servidor web desenvolvido em **Node.js** utilizando o módulo nativo **`http`**.

## 🚀 Tecnologias

* JavaScript
* Node.js
* Módulo `http`

## 📋 Funcionalidades

* Criação de servidor HTTP.
* Rota `/status` para verificar se o servidor está online.
* Respostas em formato JSON.
* Tratamento de rotas inexistentes com status `404`.
* Registro das requisições no terminal.
* Utilização de cabeçalhos HTTP de segurança.

## 📡 Rotas

### `GET /status`

Retorna o status do servidor:

```json
{
  "servidorWeb": "Online"
}
```

### Outras rotas

Retornam:

```json
{
  "erro": "Página não encontrada!"
}
```

Status: `404 Not Found`

## ▶️ Como executar

```bash
node index.js
```

O servidor será iniciado na porta:

```text
http://localhost:3000
```

Para verificar o status:

```text
http://localhost:3000/status
```

## 🔐 Segurança

O servidor utiliza:

* `X-Content-Type-Options: nosniff`
* `X-Frame-Options: DENY`

## 👨‍💻 Autor

**Álvaro Alves**

Projeto desenvolvido para estudos de **Back-End com Node.js**.
