const express = require('express')

const route = express.Router()

const Handler = require('./middlewares/handlers/url.handler')
const Controller = require('./controllers/url.controller')

route.post('/create', Handler.handleCreate, Controller.create )

module.exports = route