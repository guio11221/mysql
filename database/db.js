const mysql = require('mysql') // modulo que vaos usar para conectar o mysql com o node
const database = "portal_noticia1"  // nome database

// COR DO CONSOLE
const verde = '\033[1;32m'
const red = '\u001b[31m';
// Criando a conection do mysql com o nodejs

const connection = mysql.createConnection({
    host     : 'localhost', // servidor, no caso vai ser local ou seja http://localhost:Porta
    user     : 'root', // usuario ;-;
    password : '', // caso tenha uma senha para acessar o negocio la onde tu entra no WorkBench
    database : database  // nome da database
  });


  const pool  = mysql.createPool({
    host     : 'localhost', // servidor, no caso vai ser local ou seja http://localhost:Porta
    user     : 'root', // usuario ;-;
    password : '', // caso tenha uma senha para acessar o negocio la onde tu entra no WorkBench
    database : database // nome da database
});

connection.connect(function(error){
  if(!!error){
    console.log(red,'Põ veyy essa bagaça está com error, resolve aii manooo: ',error);
  }else{
    console.log(verde,'Conectado ao banco de dados menorrrr!:)');
  }
});  

module.exports = connection;
module.exports = pool;