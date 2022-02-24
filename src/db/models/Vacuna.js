const { Schema, model } = require("mongoose");

const VacunaModel = new Schema({
  nombre: { type: String, required: true },
  dosis: { type: Number, require: true },
});

const Vacuna = model("Vacuna", VacunaModel, "vacunas");

module.exports = Vacuna;
