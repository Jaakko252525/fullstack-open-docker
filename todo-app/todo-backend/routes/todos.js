

const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

// redis
const { setAsync, getAsync } = require('../redis/index')

/* GET todos listing. */
router.get('/', async (_, res) => {

  console.log('inside todos')

  try {
    console.log('inside try')

    const todos = await Todo.find({})

    console.log('todos found:', todos)
    res.send(todos);
  } catch(e) {
      res.send(e)
  }

});

/* POST todo to listing. */
router.post('/', async (req, res) => {

  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  // increasing the redis counter
  const data = await getAsync("todosAmount")

  let counter =  Number(data) + 1

  // setting new amount
  setAsync("todosAmount", counter)

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {

  console.log('inside GET endpoint')

  try {
    const { id } = req.params
    req.todo = await Todo.findById(id)

    if (!req.todo) return res.sendStatus(404);

    // cant put code aftes the res.send
    res.send(req.todo);
  } catch(e) {
      res.send(e)
  }

}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {

  console.log('inside delete')
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});


/* PUT todo. */
singleRouter.put('/:id', async (req, res) => {

  console.log('inside PUT')
  try {
    console.log('heere 1')
    // get parameters
    const { text } = req.body
    const { id } = req.params

    console.log('text:', text)

    // finding the todo
    let todo_1 = await req.todo.findOne({ id });

    console.log('found this obj:', todo_1)
    // updating the specific todo
    await Todo.findByIdAndUpdate(id, { text })

    res.send('workt');
  
   }catch(e) {
    console.log()
    console.log('error:', '\n', e)
    return res.sendStatus(405); // Implement this

  }

});



router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;








