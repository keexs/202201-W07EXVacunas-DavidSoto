const { Schema, model } = require("mongoose");

const CiudadModel = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  puntosVacunacion: [
    {
      nombre: { type: String, required: true },
      localizacion: {
        coordenadas: { type: Array, required: true },
        direccion: { type: String },
      },
      vacunas: { type: Array, required: true },
    },
    {
      nombre: { type: String, required: true },
      localizacion: {
        coordenadas: { type: Array, required: true },
        direccion: { type: String },
      },
      vacunas: { type: Array, required: true },
    },
    {
      nombre: { type: String, required: true },
      localizacion: {
        coordenadas: { type: Array, required: true },
        direccion: { type: String },
      },
      vacunas: { type: Array, required: true },
    },
    {
      nombre: { type: String, required: true },
      localizacion: {
        coordenadas: { type: Array, required: true },
        direccion: { type: String },
      },
      vacunas: { type: Array, required: true },
    },
  ],
});

const Ciudad = model("Ciudad", CiudadModel, "ciudades");

module.exports = Ciudad;
