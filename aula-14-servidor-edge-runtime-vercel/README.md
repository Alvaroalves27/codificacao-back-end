# Edge Runtime

Este projeto apresenta um exemplo simples de uma função executada utilizando **Edge Runtime**.

A função retorna informações sobre a execução do servidor, como horário, região e tempo necessário para executar a função.

## 📌 Objetivo

O objetivo deste projeto é demonstrar como criar uma função que pode ser executada na **borda da rede (Edge)**, permitindo que o processamento aconteça mais próximo do usuário.

## ⚙️ Funcionamento

A função utiliza:

* `runtime: 'edge'` para definir a execução no Edge Runtime;
* `Request` para receber a requisição;
* `Response` para enviar a resposta;
* `Date` para obter o horário do servidor;
* `JSON.stringify()` para transformar os dados em JSON.

## 💻 Código

```typescript
export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const inicio = new Date();

    return new Response(
        JSON.stringify({
            mensagem: 'Função executada na borda de rede',
            horarioDoServidor: new Date().toISOString(),
            regiao: 'local-dev',
            tempoDeExecução: `${Date.now() - inicio.getTime()}ms`,
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        },
    );
}
```

## 🚀 Como funciona a resposta

Quando a função é acessada, ela retorna uma resposta no formato JSON:

```json
{
    "mensagem": "Função executada na borda de rede",
    "horarioDoServidor": "2026-10-06T00:00:00.000Z",
    "regiao": "local-dev",
    "tempoDeExecução": "0ms"
}
```

### Dados retornados

| Campo               | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| `mensagem`          | Informa que a função foi executada na borda da rede.   |
| `horarioDoServidor` | Mostra o horário em que a função foi executada.        |
| `regiao`            | Indica a região utilizada na execução.                 |
| `tempoDeExecução`   | Mostra quanto tempo a função levou para ser executada. |

## 🌐 Edge Runtime

O **Edge Runtime** permite executar funções em servidores distribuídos geograficamente, buscando reduzir a distância entre o usuário e o servidor.

Isso pode ajudar a diminuir a latência e melhorar o tempo de resposta de aplicações que precisam executar pequenas funções rapidamente.

Neste exemplo, a região está definida como:

```text
local-dev
```

Esse valor representa o ambiente de desenvolvimento local e não necessariamente uma região real de produção.

## 📁 Estrutura do projeto

Uma estrutura simples pode ser:

```text
projeto/
├── api/
│   └── edge.ts
├── README.md
└── package.json
```

> O nome e a localização do arquivo podem variar de acordo com a estrutura do projeto.

## 🧪 Testando

Depois de iniciar o projeto, acesse a rota correspondente à função pelo navegador ou por uma ferramenta como Postman.

A resposta deverá ser exibida em formato JSON.

Exemplo:

```text
GET /api/edge
```

Resposta:

```json
{
    "mensagem": "Função executada na borda de rede",
    "horarioDoServidor": "2026-10-06T00:00:00.000Z",
    "regiao": "local-dev",
    "tempoDeExecução": "0ms"
}
```

## 🎯 Conclusão

Este exemplo demonstra de forma básica como utilizar o **Edge Runtime** para executar uma função na borda da rede e retornar informações sobre sua execução.

O código também ajuda a entender o uso de requisições, respostas HTTP e dados em formato JSON.

## 👨‍💻 Tecnologias utilizadas

* TypeScript
* Edge Runtime
* HTTP
* JSON
