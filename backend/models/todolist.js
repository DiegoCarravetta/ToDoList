const mongoose = require('mongoose');

const todolistModel = new mongoose.Schema({
  titulo: {type: String, required: true},
  descricao: {type: String, required: true},
  prioridade: {type: String, required: true},
  status: {type: String, required: true},
  prazo: {type: String, required: true},
  dataCriacao: {type: Date, default: Date.now}
});

const Tarefas = mongoose.model('tarefas', todolistModel);

module.exports = Tarefas;