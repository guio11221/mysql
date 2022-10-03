const express = require('express')
const app = express()
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '../views'));
app.use(logger('dev')); // Por rota no console
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));



// CASO DE ERRORR


app.use((err, req, res, next) => {
    res.status(400).send(err.message)
  })


module.exports = app //Esportando uma variável "APP"