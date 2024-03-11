require('dotenv').config()
const express = require('express')
const { connectBD } = require('./src/config/db')
const { contenidoRouter } = require('./src/api/routes/contenido')
const { plataformasRouter } = require('./src/api/routes/plataformas')
const { usersRouter } = require('./src/api/routes/users')
const cloudinary = require('cloudinary').v2

const app = express()
app.use(express.json())
const PORT = 9090
connectBD()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use('/api/v1/contenido', contenidoRouter)
app.use('/api/v1/plataformas', plataformasRouter)
app.use('/api/v1/users', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

app.listen(PORT, () => {
  console.log('escuchamos el puerto en http://localhost:' + PORT)
})
