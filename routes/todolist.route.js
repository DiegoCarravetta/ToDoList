const express = require('express');
const tarefasController = require('../controllers/todolist.controller');

const router = express.Router();

router.get('/', tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefasById);

router.post('/add', tarefasController.createTarefas);

router.put('/edit/:id', tarefasController.editTarefas);

router.delete('/delete/:id', tarefasController.deleteTarefas);

module.exports = router;