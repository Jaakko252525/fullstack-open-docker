
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

    
    const data = await Todo.find({})

    const key = 'todos'

    await setAsync(key, data.length)
    

    if(!data) return res.send('no todos')

    const getAsyncData = await getAsync(key)
    
    console.log('daada:', getAsyncData)


    res.send(data)


})

router.use('/', get)


module.exports = router









