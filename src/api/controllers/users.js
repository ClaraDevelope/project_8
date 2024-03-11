// const bcrypt = require('bcrypt')
// const { generateSign } = require('../../config/jwt')
// const User = require('../models/users')

// const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find()
//     return res.status(200).json(users)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }
// const register = async (req, res, next) => {
//   try {
//     const newUser = new User({
//       userName: req.body.userName,
//       email: req.body.email,
//       password: req.body.password,
//       year: req.body.year,
//       perfilImage: req.body.perfilImage,
//       rol: 'user'
//     })
//     const duplicateUser = await User.findOne(
//       { userName: req.body.userName },
//       { email: req.body.email }
//     )
//     if (duplicateUser) {
//       return res
//         .status(400)
//         .json('Ya existe un usuario con ese nombre y ese email')
//     }
//     const userSaved = await newUser.save()
//     return res.status(201).json(userSaved)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }

// const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ userName: req.body.userName })
//     if (!user) {
//       return res.status(404).json({ error: 'Usuario no encontrado' })
//     }
//     if (bcrypt.compareSync(req.body.password, user.password)) {
//       const token = generateSign(user._id)
//       return res.status(200).json({ user, token })
//     } else {
//       return res.status(400).json({ error: 'Contraseña incorrecta' })
//     }
//   } catch (error) {
//     console.error('Error al iniciar sesión:', error)
//     return res.status(500).json({ error: 'Error interno del servidor' })
//   }
// }

// const updateUsers = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const userModify = req.body
//     const userUpdated = await User.findByIdAndUpdate(id, userModify)
//     return res.status(200).json(userUpdated)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }

// const deleteUsers = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const user = await User.findByIdAndDelete(id)
//     return res.json(user)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }

// const logout = async (req, res, next) => {
//   try {
//     const token = null
//     return res.status(201).json(token)
//   } catch (error) {
//     return res.status(400).json(error)
//   }
// }

// module.exports = { getUsers, register, login, updateUsers, deleteUsers, logout }
