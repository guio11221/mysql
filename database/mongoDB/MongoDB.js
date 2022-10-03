require('dotenv').config() // arquivo .env  
const  mongoose = require('mongoose');
const URL_MONGO = process.env.URL_MONGO || ''

mongoose.connect(URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('Conectado ao MongoDB');
}).catch(function (err) {
    console.log('Erro ao conectar ao MongoDB: ' + err.message);
});

var customerSchema = new mongoose.Schema({
    nome: String,
    tags: [String]
}, { collection: 'customers' }
);

module.exports ={ Mongoose: mongoose,  CustomerSchema: customerSchema }