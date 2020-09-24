const express = require('express')

const route = express.Router()

route.get('/', (req,res)=>{
    return res.json({mess:'ola mundo'})
})

module.exports = route