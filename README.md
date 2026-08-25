API Connect
Objetivo

A API Connect é uma API REST desenvolvida como Produto Mínimo Viável (MVP) para realizar o cadastro, consulta, atualização e exclusão de usuários.

A aplicação utiliza uma estrutura de dados em memória para simular a persistência das informações, permitindo demonstrar o funcionamento das principais operações HTTP sem a necessidade de um banco de dados.

Tecnologias utilizadas
Node.js
Express.js
JavaScript
HTTP/REST
JSON
Git e GitHub
Postman para testes da API
Estrutura do projeto
api-connect/
├── server.js
├── package.json
├── .gitignore
├── README.md
├── routes/
│   └── connectRoutes.js
├── controllers/
│   └── connectController.js
└── data/
    └── connectData.js
Como executar localmente
1. Clonar o repositório
git clone URL_DO_REPOSITORIO
2. Acessar a pasta
cd api-connect
3. Instalar as dependências
npm install
4. Iniciar o servidor
node server.js

O servidor será iniciado na porta 3000:

http://localhost:3000
Endpoints
Criar usuário

POST /api/users

Corpo da requisição:

{
  "name": "João Silva",
  "email": "joao@email.com"
}

Resposta esperada: 201 Created

{
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
Listar usuários

GET /api/users

Resposta esperada: 200 OK

Buscar usuário por ID

GET /api/users/:id

Exemplo:

GET /api/users/1

Se o usuário não existir, a API retorna 404 Not Found.

Atualizar usuário

PUT /api/users/:id

Exemplo:

PUT /api/users/1

Corpo:

{
  "name": "João Santos",
  "email": "joao.santos@email.com"
}

Resposta esperada: 200 OK

Excluir usuário

DELETE /api/users/:id

Exemplo:

DELETE /api/users/1

Resposta esperada: 204 No Content.

Validação

Os campos name e email são obrigatórios nas operações de criação e atualização.

Quando os dados obrigatórios não são fornecidos, a API retorna:

400 Bad Request

{
  "error": "O campo \"email\" é obrigatório."
}
Persistência

Para este MVP, os usuários são armazenados em um array em memória. Dessa forma, os dados permanecem disponíveis enquanto o servidor estiver em execução.

Como não há banco de dados persistente, as informações são perdidas quando o servidor é encerrado ou reiniciado.

Testes

Os endpoints foram projetados para serem testados utilizando ferramentas como Postman, Insomnia ou Thunder Client.

Os principais cenários de teste são:

Criação de usuário com sucesso — 201
Criação sem e-mail — 400
Listagem de usuários — 200
Busca de usuário inexistente — 404
Atualização de usuário — 200
Exclusão de usuário — 204
