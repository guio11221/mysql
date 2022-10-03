require('dotenv').config() // gerencia as variavel de ambiente .env
const app = require('./confg/app') // conffiguração do express
const PORTA = process.env.PORTA || 3000 || 5000 || 8080 || 3333 // PORTA 
// muda o nome do arquivo  exemple_env para  .env


const  pool = require('./database/db') // configuração do banco


// COR NO CONSOLE
var red, blue, verde;
red = '\u001b[31m';
blue = '\u001b[34m';
verde = '\033[1;32m'


app.get('/buscar/:id', function (req, res, next) {  // http://localhost:3000/buscar/1
  pool.getConnection(function (err, connection) {
      var id = req.params.id;
      console.log(id)
      connection.query("SELECT * FROM  noticias  WHERE id_noticia='"
          + id + "' LIMIT 1", function (err, rows) {
              if (!err && rows.length > 0) {
                  res.json(rows);
                  
              } else {
                  res.status().json('[ERROR] Palavra não encontrada');
                  
              }
          });
  });
});


app.get('/deletar/:id', function (req, res, next) {
  pool.getConnection(function (err, connection) {
      var id = req.params.id;
      console.log(id)
      connection.query("DELETE FROM noticias WHERE id_noticia='" + id +
          "'", function (err, rows) {
              if (!err) {
               res.redirect('/noticias/')
              } else {
                  console.log(red,'[ERROR] Verifica o codigo de novo',err)
              }
          });
  });
});


  app.get('/noticias/', (req,res)=>{ // http://localhost:3000/noticias/


    pool.query('SELECT * from noticias', function (error, result) { // selecionar tabela noticias e ver o quue tem nela

    if(error){console.log(error)} // caso tenha algum error

        // res.send(result) // mandar o result na tela
        res.render('Teste/teste.ejs', {lista: result }) // renderisar a pasta teste na tela
        console.table(result) // mostrar a tabela no console
    });
   

  });





  app.get('/', (req, res) => { // sei la kskskskkksskskksksksksks
    res.render('home.ejs', { title: "By: G" })
  })

  
  app.listen(PORTA, () =>{
    var dtNow = new Date;

    console.log(red,'=====================================');
    console.log('    Servidor rodando: ' + dtNow.getHours() + ":" + dtNow.getMinutes() + ":" + dtNow.getSeconds());
    console.log(` ${blue}    Criador: Guii_Santos`)
    console.log('=====================================',verde); 
    
    // http://localhost:3000/
  })