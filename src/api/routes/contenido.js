const { getContenido, postContenido } = require('../controllers/contenido')
const { upload } = require('../../middlewares/File')

const contenidoRouter = require('express').Router()

contenidoRouter.get('/', getContenido)
contenidoRouter.post('/', upload.single('image'), postContenido)

module.exports = { contenidoRouter }
