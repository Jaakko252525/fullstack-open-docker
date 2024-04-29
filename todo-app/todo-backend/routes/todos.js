const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params

  req.todo = await Todo.findById(id)
  console.log('')
  console.log('inside the id endpoit')
  console.log('found the shit:', req.todo)
  console.log('')

  if (!req.todo) return res.sendStatus(404);

  const todo = await Todo.findById(id)

  res.send(todo);

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/change', async (req, res) => {
  try {
    console.log('heere 1')
    // get parameters
    const { id, text } = req.body
    // finding the todo
    let todo_1 = await req.todo.findOne({ id });
    // updating the specific todo
    await req.todo.findByIdAndUpdate(id, { text });
    // save todo changed
    await todo_1.save()


    // fetch updated todo
    let newT = await req.todo.findOne({ id });
    if (!newT) {
      res.send(newT);

    } else {
      return res.sendStatus(405); // Implement this
    }
  
  }catch(e) {
    console.log()
    console.log('errer:', '\n', e)
  }


});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;








