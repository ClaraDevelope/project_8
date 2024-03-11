// const Plataforma = require('../models/plataformas')

// const getPlataformas = async (req, res, next) => {
//   try {
//     const plataformas = await Plataforma.find()
//     return res.json(plataformas)
//   } catch (error) {
//     return res.status(400).json('Error al hacer el get de las plataformas')
//   }
// }

// const postPlataformas = async (req, res, next) => {
//   try {
//     const newPlataforma = new Plataforma(req.body)
//     const plataforma = await newPlataforma.save()
//     return res.status(201).json(plataforma)
//   } catch (error) {
//     return res.status(400).json('Error al hacer el post de las plataformas')
//   }
// }

// const updatePlataformas = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const plataformaModify = new Plataforma(req.body)
//     plataformaModify._id = id
//     const plataformaUpdated = await Plataforma.findByIdAndUpdate(
//       id,
//       plataformaModify
//     )
//     return res.status(200).json(plataformaUpdated)
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ error: 'Error al hacer el update de las plataformas' })
//   }
// }

// const deletePlataformas = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const plataforma = await Plataforma.findByIdAndDelete(id)
//     return res.json(plataforma)
//   } catch (error) {
//     return res.status(400).json('Error al hacer el delete de las plataformas')
//   }
// }

// module.exports = {
//   getPlataformas,
//   postPlataformas,
//   updatePlataformas,
//   deletePlataformas
// }
