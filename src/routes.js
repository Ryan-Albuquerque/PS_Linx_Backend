const express = require('express')

const api = require('./routes/api.routes')
const shorted = require('./routes/shorted.routes')

let route = express.Router()

route.use('/api', api)
route.use('/u', shorted)

module.exports = route