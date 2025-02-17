// config/database.js
const { Sequelize } = require('sequelize');
const config = require('../config/config.json'); // ajuste o caminho conforme necessário

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

module.exports = sequelize;
