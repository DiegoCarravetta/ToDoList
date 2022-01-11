const mongoose = require('mongoose');

const Conn = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Banco conectado');
  }).catch((err) => {
    return console.log(`Erro na conexão do banco ${err}`)
  });
};

module.exports = Conn;