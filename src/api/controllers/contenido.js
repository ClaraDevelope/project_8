const Contenido = require('../models/contenido')

const getContenido = async (req, res, next) => {
  try {
    const contenidos = await Contenido.find().populate('plataformas')
    return res.status(200).json(contenidos)
  } catch (error) {
    return res.status(400).json('Error al hacer get de los contenidos')
  }
}

const postContenido = async (req, res, next) => {
  try {
    const newContenido = new Contenido(req.body)
    if (req.file) {
      newContenido.image = req.file.path
    }
    const contenidos = await newContenido.save()
    res.status(201).json(contenidos)
  } catch (error) {
    console.log(error)
    return res.status(400).json('no se ha hecho el post correctamente')
  }
}

const updateContenido = async (req, res, next) => {
  try {
    const { id } = req.params
    const contenidoUpdated = await Contenido.findByIdAndUpdate(
      id,
      { ...req.body, image: req.file ? req.file.path : 'not image' },
      {
        new: true
      }
    )
    if (!contenidoUpdated) {
      return res.status(404).json({ message: 'Contenido no encontrado' })
    }
    res.status(200).json(contenidoUpdated)
  } catch (error) {
    return res.status(400).json('Error al hacer update de los contenidos')
  }
}

const deleteContenido = async (req, res, next) => {
  try {
    const { id } = req.params
    const contenido = await Contenido.findByIdAndDelete(id)
    if (contenido.img) deleteImgCloudinary(contenido.img)
    res.status(200).json(contenido)
  } catch (error) {
    return res.status(400).json('Error al hacer delete de los contenidos')
  }
}

module.exports = {
  getContenido,
  postContenido,
  updateContenido,
  deleteContenido
}
