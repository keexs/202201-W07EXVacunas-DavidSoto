const Ciudad = require("../db/models/Ciudad");

const getCentros = async () => {
  const ciudad = await Ciudad.find();
  console.log(ciudad);
};

module.exports = getCentros;
