# 🚀 API Connect

> **API REST desenvolvida como Produto Mínimo Viável (MVP) para gerenciamento de usuários.**

---

## 📌 Sobre o projeto

A **API Connect** é uma aplicação back-end desenvolvida para demonstrar, de forma prática, o funcionamento de uma **API REST** utilizando o protocolo HTTP.

O projeto permite realizar as principais operações de gerenciamento de usuários:

* ➕ Criar usuários
* 📋 Listar usuários
* 🔎 Buscar usuários por ID
* ✏️ Atualizar usuários
* 🗑️ Excluir usuários
* ✅ Validar dados enviados pelo cliente
* ⚠️ Retornar códigos HTTP apropriados para cada situação

Para simplificar o desenvolvimento do MVP, os dados são armazenados temporariamente **em memória**, sem utilização de banco de dados.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia        | Utilização                           |
| ----------------- | ------------------------------------ |
| 🟢 **Node.js**    | Ambiente de execução JavaScript      |
| 🚂 **Express.js** | Framework para construção da API     |
| 📦 **npm**        | Gerenciamento de dependências        |
| 🔗 **HTTP/REST**  | Comunicação entre cliente e servidor |
| 📄 **JSON**       | Formato de troca de dados            |
| 🔧 **Git**        | Controle de versão                   |
| 🐙 **GitHub**     | Hospedagem do código                 |
| 🧪 **Postman**    | Testes das requisições HTTP          |

---

## 📁 Estrutura do projeto

```text
api-connect/
│
├── 📄 server.js
├── 📄 package.json
├── 📄 README.md
├── 📄 .gitignore
│
├── 📂 controllers/
│   └── 📄 connectController.js
│
├── 📂 routes/
│   └── 📄 connectRoutes.js
│
└── 📂 data/
    └── 📄 connectData.js
```

### Responsabilidades

**`server.js`**
Ponto de entrada da aplicação. Inicializa o Express, configura os middlewares e coloca o servidor em funcionamento.

**`routes/connectRoutes.js`**
Define os endpoints e os métodos HTTP disponíveis na API.

**`controllers/connectController.js`**
Concentra a lógica de negócio e o tratamento das requisições.

**`data/connectData.js`**
Simula a camada de persistência utilizando um array em memória.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/RaulSNasc/meu-projeto.git
```

### 2. Acesse a pasta

```bash
cd meu-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node server.js
```

Se tudo estiver funcionando corretamente, será exibida a mensagem:

```text
Servidor rodando em http://localhost:3000
```

A API estará disponível em:

```text
http://localhost:3000
```

---

# 🔗 Endpoints da API

## ➕ Criar usuário

**POST** `/api/users`

### Requisição

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

### Resposta — `201 Created`

```json
{
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

---

## 📋 Listar usuários

**GET** `/api/users`

### Resposta — `200 OK`

```json
{
  "data": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@email.com"
    }
  ]
}
```

---

## 🔎 Buscar usuário por ID

**GET** `/api/users/:id`

### Exemplo

```text
GET /api/users/1
```

### Resposta — `200 OK`

```json
{
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

### Usuário inexistente — `404 Not Found`

```json
{
  "error": "Usuário não encontrado"
}
```

---

## ✏️ Atualizar usuário

**PUT** `/api/users/:id`

### Exemplo

```text
PUT /api/users/1
```

### Corpo da requisição

```json
{
  "name": "João Santos",
  "email": "joao.santos@email.com"
}
```

### Resposta — `200 OK`

```json
{
  "data": {
    "id": 1,
    "name": "João Santos",
    "email": "joao.santos@email.com"
  }
}
```

---

## 🗑️ Excluir usuário

**DELETE** `/api/users/:id`

### Exemplo

```text
DELETE /api/users/1
```

### Resposta

```text
204 No Content
```

---

# ✅ Validação de dados

A API valida os dados recebidos nas operações de criação e atualização.

Os campos obrigatórios são:

* `name`
* `email`

Caso algum campo obrigatório não seja informado, a API retorna:

### `400 Bad Request`

```json
{
  "error": "O campo \"email\" é obrigatório."
}
```

---

# 🧪 Testes realizados

Os endpoints podem ser testados utilizando **Postman**, **Insomnia** ou **Thunder Client**.

| Cenário               | Método   | Endpoint          | Status   |
| --------------------- | -------- | ----------------- | -------- |
| Criar usuário         | `POST`   | `/api/users`      | 🟢 `201` |
| Criar sem e-mail      | `POST`   | `/api/users`      | 🔴 `400` |
| Listar usuários       | `GET`    | `/api/users`      | 🟢 `200` |
| Buscar usuário        | `GET`    | `/api/users/:id`  | 🟢 `200` |
| Buscar ID inexistente | `GET`    | `/api/users/9999` | 🔴 `404` |
| Atualizar usuário     | `PUT`    | `/api/users/:id`  | 🟢 `200` |
| Excluir usuário       | `DELETE` | `/api/users/:id`  | 🟢 `204` |

---

# 💾 Persistência

Neste MVP, os usuários são armazenados em uma estrutura **array em memória**.

Isso significa que:

> ⚠️ Os dados são perdidos quando o servidor é encerrado ou reiniciado.

Essa abordagem foi escolhida para manter o projeto simples e focado nos conceitos fundamentais de desenvolvimento de APIs REST.

Em uma versão futura, a aplicação poderá utilizar um banco de dados como **PostgreSQL, MySQL ou MongoDB**.

---

# 🔐 Boas práticas aplicadas

O projeto utiliza alguns princípios importantes de desenvolvimento back-end:

* ✅ Separação de responsabilidades
* ✅ Organização em rotas, controladores e dados
* ✅ Validação de entrada
* ✅ Uso adequado dos métodos HTTP
* ✅ Utilização de códigos de status HTTP
* ✅ Respostas padronizadas em JSON
* ✅ Tratamento de recursos inexistentes
* ✅ Controle de versão com Git
* ✅ Exclusão do `node_modules` através do `.gitignore`

---

# 👨‍💻 Autor

**Raul Santos**

Projeto desenvolvido como atividade prática de desenvolvimento de APIs REST.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e acadêmicos**.
