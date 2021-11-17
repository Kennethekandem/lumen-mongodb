const routes = require('express').Router()
require('dotenv').config()

const controller = require('../controller/blockchain')

routes.get('/', (req, res) => res.send("hello world"));

routes.post('/send_funds', controller.generate)
module.exports = routes
