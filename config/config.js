// config/config.js
require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: process.env.postgres,
    password: process.env.jesus,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
};
