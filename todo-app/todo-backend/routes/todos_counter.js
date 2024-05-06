
// redis store functions
const { getAsync, setAsync } = require('../redis/index')

// express
const express = require('express')

// todo
const { Todo } = require('../mongo')

//router
const router = express.Router();



// respond with "hello world" when a GET request is made to the homepage
const get = router.get('', async(req, res) => {

    try{

        const data = await Todo.find({})
        const key = 'todosAmount'
        const dataLen = data.length

        await setAsync(key, dataLen)

        if(!data) return res.send('no todos')

        const getAsyncData = await getAsync(key)
        const todoAmountAndString = 'Todos:' + getAsyncData
        
        res.send(todoAmountAndString)
        
    }catch(err) {
        console.log('errrrr:', err)
    }
})

router.use('/', get)


module.exports = router









