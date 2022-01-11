const mongoose = require('mongoose');
const tarefasService = require('../services/todolist.service');

const getTarefas = async (req, res) => {
  const tarefas = await tarefasService.getTarefas();
  res.send(tarefas);
};

const getTarefasById = async (req, res) => {
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({message: 'Id inválido, por favor, identifique as informações'});
    return
  }
  const tarefas = await tarefasService.getTarefasById(id);
  if(!tarefas) {
    res.status(404).send({message: 'Tarefa não encontrada'})
  }
  res.send(tarefas);
};

const createTarefas = async (req, res) => {
  const tarefas = req.body;
  await tarefasService.createTarefas(tarefas).then(() => {
    res.send({message: 'Tarefa cadastrada com sucesso'});
  }).catch((err) => {
    res.status(500).send({message: `Erro no servidor: ${err}`});
  });
};

const editTarefas = async (req, res) => {
  const id = req.params.id;
  const tarefasEdit = req.body;
  await tarefasService.editTarefas(id, tarefasEdit)
  .then(() => res.send({message: 'Tarefa editada com sucesso'}))
  .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))
};

const deleteTarefas = async (req, res) => {
  const id = req.params.id;
  await tarefasService.deleteTarefas(id)
  .then(() => res.send({message: 'Tarefa excluída com sucesso'}))
  .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))
};

module.exports = {
  getTarefas,
  getTarefasById,
  createTarefas,
  editTarefas,
  deleteTarefas
};