const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {
  mongoose.connect(`${url}/${data}`, {
    user: user,
    pass: pass,
    useNewUrlParser: true
  }).then(() => {
    console.log('MONGO DB CONECTADO')
  }).catch((err) => {
    return console.log(`Erro na conexao com o banco: ${err}`)
  })
}

module.exports = Conn;