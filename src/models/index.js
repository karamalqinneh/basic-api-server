"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const user = require("./user");
const clothes = require("./clothes");

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false,
  //     },
  //   },
};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

module.exports = {
  database: sequelize, //for real connection and will use it in index.js
  User: user(sequelize, DataTypes), // for creating the table and will use it in our routes
  Clothes: clothes(sequelize, DataTypes),
};
