const mongoose = require('mongoose')

const plataformasSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    calification: { type: Number },
    image: { type: String, required: true, trim: true }
  },
  {
    collection: 'plataformas',
    timestamps: true
  }
)
const Plataforma = mongoose.model(
  'plataformas',
  plataformasSchema,
  'plataformas'
)
module.exports = Plataforma
