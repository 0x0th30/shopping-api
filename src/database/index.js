const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig.json');

const connection = new Sequelize(dbConfig);

module.exports = connection;