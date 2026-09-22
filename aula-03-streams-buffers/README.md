# 📂 Streams e Buffers — Node.js

Projeto desenvolvido em **Node.js** para praticar o uso de **Streams** no processamento de arquivos grandes.

A aplicação gera um arquivo de log com **400.000 registros** e, posteriormente, realiza a leitura e filtragem desses dados, salvando apenas as linhas que possuem mensagens do tipo `ERROR`.

## 🚀 Tecnologias

* JavaScript
* Node.js
* Módulo `fs`
* Módulo `readline`
* Streams

## 📋 Funcionalidades

* Geração de um arquivo de log com 400.000 linhas.
* Simulação de registros `INFO` e `ERROR`.
* Leitura do arquivo utilizando `createReadStream()`.
* Processamento dos dados linha por linha.
* Identificação das linhas que possuem `ERROR`.
* Criação de um arquivo contendo somente os erros.
* Contagem da quantidade de erros encontrados.
* Monitoramento do consumo de memória durante o processamento.

## 📁 Estrutura do Projeto

```text
aula03-streams-buffers/
│
├── servidor.log
├── apenas erros.log
├── gerar-log.js
├── filtrar-erros.js
└── README.md
```

## ⚙️ Funcionamento

### 1. Geração do arquivo de log

O arquivo `gerar-log.js` utiliza uma **Stream de escrita** para criar o arquivo `servidor.log`.

São geradas **400.000 linhas**, contendo mensagens de teste com os tipos:

* `INFO`
* `ERROR`

A cada 7 registros, um registro é definido como `ERROR`.

### 2. Leitura e filtragem

O arquivo `filtrar-erros.js` utiliza uma **Stream de leitura** para processar o conteúdo do `servidor.log`.

O módulo `readline` permite que o arquivo seja processado **linha por linha**, evitando carregar todo o conteúdo na memória.

Quando uma linha contém a palavra `ERROR`, ela é gravada no arquivo:

```text
apenas erros.log
```

Além disso, o programa contabiliza a quantidade total de erros encontrados.

### 3. Monitoramento da memória

Durante o processamento, o programa utiliza:

```javascript
process.memoryUsage()
```

para verificar o consumo de memória.

São exibidas informações no início e no final do processamento, permitindo observar como as **Streams** ajudam no processamento de grandes arquivos.

## ▶️ Como executar

### 1. Gerar o arquivo de log

No terminal do VS Code, execute:

```bash
node gerar-log.js
```

Esse comando irá criar o arquivo:

```text
servidor.log
```

com 400.000 registros.

### 2. Filtrar os erros

Depois de gerar o arquivo, execute:

```bash
node filtrar-erros.js
```

O programa irá:

1. Ler o arquivo `servidor.log`.
2. Processar cada linha.
3. Identificar as linhas com `ERROR`.
4. Salvar os erros em `apenas erros.log`.
5. Contabilizar a quantidade de erros encontrados.
6. Exibir o consumo de memória no terminal.

## 💻 Exemplo de saída

```text
Gerando arquivo de log simulado...

Iniciando processamento com stream...
[Inicio] RSS: XX.XX MB | Heap Utilizado: XX.XX MB

[Fim] RSS: XX.XX MB | Heap Utilizado: XX.XX MB

processamento concluido!

Quantidades de Erros Encontrados: XXXXX linhas.
```

> Os valores de memória e a quantidade de erros podem variar de acordo com a execução.

## 📚 Conceitos Praticados

* Streams de leitura e escrita
* `fs.createReadStream()`
* `fs.createWriteStream()`
* `readline.createInterface()`
* `for await...of`
* Processamento assíncrono
* Manipulação de arquivos
* Processamento de grandes volumes de dados
* Consumo de memória
* `process.memoryUsage()`

## 🎯 Objetivo

O objetivo deste projeto é compreender como utilizar **Streams no Node.js** para processar arquivos grandes de maneira mais eficiente, realizando a leitura e escrita dos dados gradualmente em vez de carregar todo o conteúdo do arquivo na memória.

---

**Desenvolvido para estudos de Node.js e desenvolvimento Back-end.**
