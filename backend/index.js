const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const tarefasRouter = require('./routes/todolist.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/tarefas', tarefasRouter);

Conn();

const port = 3001;
app.listen(port, () => {
  console.log (`Servidor inicializado na porta ${port}`);
});

