
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

    
    console.log('todos counter')    
    const data = await Todo.find({})

    const key = 'todos'
    const dataLen = 'mockdata'

    console.log('key and dataLen', key, dataLen)

    try{
        await setAsync('key', 'dataLen')
        console.log('setted async store')
    }catch(err) {

        console.log('errrrr:', err)
    }

    

    if(!data) return res.send('no todos')

    const getAsyncData = await getAsync(key)
    
    console.log('daada:', getAsyncData)
    


    res.send("hello world")

})

router.use('/', get)


module.exports = router









