const {
  getContenido,
  postContenido,
  updateContenido,
  deleteContenido
} = require('../controllers/contenido')
const { upload } = require('../../middlewares/File')
const { isAuth, isAdmin } = require('../../middlewares/auth')

const contenidoRouter = require('express').Router()

contenidoRouter.get('/', getContenido)
contenidoRouter.post('/', [isAuth], upload.single('image'), postContenido)
contenidoRouter.put('/:id', [isAdmin], updateContenido)
contenidoRouter.delete('/:id', [isAdmin], deleteContenido)

module.exports = { contenidoRouter }
