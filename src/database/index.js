const Sequelize = require('sequelize');
const Item = require('../models/Item');
const dbConfig = require('../config/dbConfig.json');

const connection = new Sequelize(dbConfig);
Item.init(connection);

module.exports = connection;