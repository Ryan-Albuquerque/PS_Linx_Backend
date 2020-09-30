const express = require('express')

const route = express.Router()

const Handler = require('../middlewares/handlers/url.handler')
const Controller = require('../controllers/url.controller')

route.get('/:id', Handler.handleGetShorted, Controller.GetShorted )

module.exports = route