const mongoose = require('mongoose')

const contenidoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ['serie', 'pelicula', 'documental'],
      required: true,
      trim: true
    },
    plataformas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plataformas',
        required: false
      }
    ],
    calification: { type: Number },
    image: { type: String, required: true, trim: true },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    collection: 'contenido',
    timestamps: true
  }
)
const Contenido = mongoose.model('contenido', contenidoSchema, 'contenido')
module.exports = Contenido
