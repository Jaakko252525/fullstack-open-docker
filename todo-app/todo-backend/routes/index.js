




const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')

// redis set and get
const { setAsync, getAsync } = require('../redis/index');
const { getOperationAST } = require('graphql');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  const data = await getAsync("visits")

  console.log('visits:', data)



  res.send({
    ...configs,
    data
  });
});

module.exports = router;
