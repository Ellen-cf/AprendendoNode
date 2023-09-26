const express = require ("express")
const exphbs = require ("express-handlebars")
const mysql = require("mysql") //iniciando o banco de dados mysql

const app = express()

//conexao do projeto ao mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', //padroes sql
    password: 'root',
    database: 'nodemysql',
    port: 3307
}) 
