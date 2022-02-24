const { Schema } = require("mongoose");

const PersonModel = new Schema({
  DNI: {
    type: String,
    required: true,
    minLength: 9,
    maxLength: 9,
  },
  CentroVacunado: {
    type: [Schema.Types.ObjectId],
  },
  VacunaAplicada: {
    type: [Schema.Types.ObjectId],
  },
});

const Person = model("Person", PersonModel, "personas");
