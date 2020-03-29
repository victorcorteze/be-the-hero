const express = require('express'); /*express é um pacote*/
const routes = require('./routes'); /*routes é o arquivo que ta na mesma pasta*/
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/*
Rota/Recurso

Metodos HTTP:
GET: Buscar um informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

**********************************
Tipos de Parâmetros
Query Params: Parâmetros nomeados na rota após o simbolo "?" (Filtros, paginação)
Route Params: Parâmetros ultilizados para identificar recursos
Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos

**********************************

Tipos de Banco
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB

*/





