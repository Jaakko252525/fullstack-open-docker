const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// todo counter router
const todo_counter_router = require('./routes/todos_counter')


const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

const router = express.Router()



router.use('/', indexRouter);
router.use('/todos', todosRouter);
router.use('/todoCounter', todo_counter_router)

app.use('/api', router)
module.exports = app;
