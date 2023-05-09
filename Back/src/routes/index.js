const login = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handlerFavorites')
const getCharById = require('../controllers/getCharById')
const routes = require('express').Router()

routes.get('/character/:id', getCharById)
routes.get('/login', login)
routes.post('/fav', postFav)
routes.delete('/fav/:id', deleteFav)

module.exports = routes;