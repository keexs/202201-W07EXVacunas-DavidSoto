const Ciudad = require("../db/models/Ciudad");

const getCentros = async () => {
  const ciudad = await Ciudad.find();
  const centros = ciudad[0].puntosVacunacion;
  centros.map((centro) => console.log(centro.nombre));
};

module.exports = getCentros;
