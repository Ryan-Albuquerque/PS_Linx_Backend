const express = require('express')

const route = express.Router()

const Handler = require('../middlewares/handlers/url.handler')
const Controller = require('../controllers/url.controller')

route.post('/create', Handler.handleCreate, Controller.create )
route.get('/top5', Handler.handleGetTop5, Controller.GetTop5)
route.get('/hits', Controller.GetAllHits)

module.exports = route