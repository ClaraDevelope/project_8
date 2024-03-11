require('dotenv').config()
const express = require('express')
const { connectBD } = require('./src/config/db')
const { contenidoRouter } = require('./src/api/routes/contenido')
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

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

// Después de tus rutas
app.use((err, req, res, next) => {
  console.error(err.stack)
  res
    .status(500)
    .json({ error: 'Error interno del servidor', message: err.message })
})

app.listen(PORT, () => {
  console.log('escuchamos el puerto en http://localhost' + PORT)
})
