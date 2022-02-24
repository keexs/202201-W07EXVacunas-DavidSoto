require("dotenv").config();
const inquirer = require("inquirer");
const connectDB = require("./db/index");
const getCentros = require("./utils/utils");

const credentialsDB = process.env.MONGODB_STRING;

(async () => {
  await connectDB(credentialsDB);
  inquirer
    .prompt([
      {
        type: "list",
        name: "opcion",
        message: "Que desea consultar?",
        choices: ["Listar centros de vacunacion"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.opcion === "Listar centros de vacunacion") {
        getCentros();
      }
    });
})();
