# 🚀 Codificação Back-End

Repositório destinado aos estudos e exercícios de **desenvolvimento Back-End**, utilizando principalmente **JavaScript, Node.js e NPM**.

---

## 🎯 Objetivos

* Revisar conceitos básicos de **Node.js** e **NPM**.
* Utilizar módulos nativos do Node.js.
* Praticar JavaScript no ambiente Back-End.
* Obter informações do sistema utilizando o módulo `os`.
* Compreender a estrutura do `package.json`.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia       | Utilização                |
| :--------------- | :------------------------ |
| **JavaScript**   | Desenvolvimento do código |
| **Node.js**      | Execução do JavaScript    |
| **NPM**          | Gerenciamento do projeto  |
| **Módulo `os`**  | Informações do sistema    |
| **Git & GitHub** | Versionamento do projeto  |

---

## 📚 Conteúdos Abordados

* Node.js
* NPM
* `package.json`
* CommonJS
* `require()`
* Módulo `os`
* Memória RAM
* Processador
* Sistema operacional
* Execução pelo terminal

---

## 💻 Diagnóstico do Servidor

Exercício utilizando o módulo **`os`** para consultar informações do computador.

O programa verifica:

* 🖥️ Sistema operacional
* 💾 Memória RAM total
* 💾 Memória RAM livre
* ⚙️ Cores do processador
* 🧠 Modelo do processador
* 🚀 Velocidade do processador

### Código

```javascript
const os = require('os');

const plataforma = os.platform();

const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);

const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);

const processador = os.cpus();

console.log('=== DIAGNÓSTICO DO SERVIDOR ===');

console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM Total: ${memoriaTotal}`);
console.log(`Memória RAM Livre: ${memoriaLivre}`);
console.log(`Cores do Processador: ${processador.length}`);
console.log(`Processador: ${processador[0].model}`);
console.log(`Velocidade do processador: ${processador[0].speed}MHz`);
```

---

## ▶️ Como Executar

```bash
node index.js
```

### 📊 Resultado esperado

```text
=== DIAGNÓSTICO DO SERVIDOR ===
Arquitetura OS: [sistema operacional]
Memória RAM Total: [memória total]
Memória RAM Livre: [memória disponível]
Cores do Processador: [quantidade de cores]
Processador: [modelo do processador]
Velocidade do processador: [velocidade em MHz]
```

> Os valores são obtidos automaticamente pelo computador utilizado.

---

## 📦 `package.json`

```json
{
  "name": "aula01-revisao-nodejs-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Alvaro Ronaldy Santos Alves",
  "license": "ISC",
  "type": "commonjs"
}
```

---

## 📁 Estrutura

```text
aula01-revisao-nodejs-npm/
├── index.js
├── package.json
└── README.md
```

---

## 👨‍💻 Autor

**Alvaro Ronaldy Santos Alves**

Projeto desenvolvido durante os estudos de **Codificação Back-End**.
