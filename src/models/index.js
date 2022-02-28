"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const user = require("./user");
const clothes = require("./clothes");
require("dotenv").config();
// console.log(user); // these console logs are defined
// console.log(clothes); // these console logs are defined

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

module.exports = {
  database: sequelize,
  User: user(sequelize, DataTypes),
  // User: "testing",
  Clothes: clothes(sequelize, DataTypes),
};
