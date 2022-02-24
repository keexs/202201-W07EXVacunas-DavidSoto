const debug = require("debug")("vacunas: database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDB = (credentialsDB) =>
  new Promise((resolve, reject) => {
    mongoose.connect(credentialsDB, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.green("Connected Vacunas DB"));
      resolve();
    });
  });

module.exports = connectDB;
