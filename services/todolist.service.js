const Tarefas = require('../models/todolist');

const getTarefas = async () => {
  const tarefas = await Tarefas.find();
  return tarefas;
};

const getTarefasById = async (id) => {
  const tarefas = await Tarefas.findById(id);
  return tarefas;
};

const createTarefas = async (tarefas) => {
  return await Tarefas.create(tarefas);
};

const editTarefas = async (id, tarefas) => {
  return await Tarefas.findByIdAndUpdate(id, tarefas);
};

const deleteTarefas = async (id) => {
  return await Tarefas.findByIdAndDelete(id);
};

module.exports = {
  getTarefas,
  getTarefasById,
  createTarefas,
  editTarefas,
  deleteTarefas
}