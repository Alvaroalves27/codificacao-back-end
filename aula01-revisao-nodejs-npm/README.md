# 🖥️ Diagnóstico do Servidor — Node.js

Projeto desenvolvido em **Node.js** para realizar um diagnóstico básico do computador, utilizando o módulo nativo `os`.

A aplicação coleta informações do sistema operacional, memória RAM e processador e exibe os dados diretamente no terminal.

## 🚀 Tecnologias

* **JavaScript**
* **Node.js**
* **Módulo nativo `os`**

## 📋 Funcionalidades

O programa coleta e exibe:

* 🖥️ Arquitetura do sistema operacional
* 💾 Memória RAM total
* 💿 Memória RAM livre
* ⚙️ Quantidade de núcleos do processador
* 🔧 Modelo do processador
* 🚀 Velocidade do processador

## 📂 Estrutura do Projeto

```text
aula01-revisao-nodejs-npm/
│
├── index.js
├── package.json
└── README.md
```

## 💻 Como executar

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acesse a pasta do projeto

```bash
cd aula01-revisao-nodejs-npm
```

### 3. Execute o programa

```bash
node index.js
```

## 📊 Exemplo de saída

```text
=== DIAGNÓSTICO DO SERVIDOR ===
Arquitetura OS: win32
Memória RAM Total: XX.XX GB
Memória RAM Livre: XX.XX GB
Cores do Processador: XX
Processador: Modelo do processador
Velocidade do processador: XXXX MHz
```

> Os valores apresentados variam de acordo com o computador em que o programa for executado.

## 🧩 Módulo `os`

O módulo `os` é um módulo nativo do Node.js que permite acessar informações relacionadas ao sistema operacional e ao hardware.

Neste projeto são utilizados:

```javascript
os.platform()
```

Obtém a plataforma do sistema operacional.

```javascript
os.totalmem()
```

Retorna a quantidade total de memória RAM.

```javascript
os.freemem()
```

Retorna a quantidade de memória RAM disponível.

```javascript
os.cpus()
```

Retorna informações sobre os processadores disponíveis no sistema.

## 🎯 Objetivo

O objetivo deste projeto é praticar:

* Utilização de módulos nativos do Node.js;
* Importação do módulo `os`;
* Coleta de informações do sistema;
* Manipulação e exibição de dados;
* Execução de aplicações Node.js pelo terminal.

## 📚 Conteúdos Praticados

* Node.js
* JavaScript
* Módulos nativos
* Módulo `os`
* Sistema operacional
* Memória RAM
* Processador
* Terminal

## 👨‍💻 Autor

**Álvaro Alves**

Projeto desenvolvido durante os estudos de **Programação Full Stack**.
