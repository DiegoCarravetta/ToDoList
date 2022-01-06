const mongoose = require('mongoose');

const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Banco conectado');
  }).catch((err) => {
    return console.log(`Erro na conexão do banco ${err}`)
  });
};

module.exports = Conn;