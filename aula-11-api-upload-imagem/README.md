# 🖼️ API de Upload de Imagens

API desenvolvida com **NestJS + TypeScript** para realizar upload e armazenamento de imagens.

## 🚀 Tecnologias

* NestJS
* TypeScript
* Node.js
* Multer
* UUID
* Express

## 📁 Estrutura

```text
src/
├── imagem/
│   ├── imagem.controller.ts
│   └── imagem.module.ts
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts

uploads/
```

## ⚙️ Instalação

Instale as dependências:

```bash
npm install
```

Caso necessário:

```bash
npm install @nestjs/platform-express multer uuid
npm install -D @types/multer
```

## ▶️ Executar o projeto

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000
```

## 📤 Upload de imagem

### Endpoint

```http
POST /imagem/upload
```

URL:

```text
http://localhost:3000/imagem/upload
```

### Envio

Utilize `multipart/form-data`.

Campo do arquivo:

```text
file
```

Exemplo no Postman:

```text
Body → form-data → file → File
```

## 🖼️ Formatos permitidos

* JPG
* JPEG
* PNG
* GIF
* WEBP

## 📏 Limite

O tamanho máximo do arquivo é:

```text
2 MB
```

## 💾 Armazenamento

As imagens são armazenadas na pasta:

```text
uploads/
```

Cada arquivo recebe um nome único utilizando **UUID**.

Exemplo:

```text
550e8400-e29b-41d4-a716-446655440000.png
```

## 🌐 Acesso à imagem

Após o upload, a imagem pode ser acessada através de:

```text
http://localhost:3000/api/uploads/NOME_DO_ARQUIVO
```

## 📋 Resposta

Exemplo de resposta:

```json
{
  "filename": "550e8400-e29b-41d4-a716-446655440000.png",
  "size": 154321,
  "url": "http://localhost:3000/api/uploads/550e8400-e29b-41d4-a716-446655440000.png"
}
```

## ⚠️ Erros

### Nenhum arquivo

```text
Nenhum arquivo enviado.
```

### Formato inválido

```text
Apenas arquivos jpg, jpeg, png, gif e webp são suportados!
```

### Arquivo maior que 2 MB

O upload se
