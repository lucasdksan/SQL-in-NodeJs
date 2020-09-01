const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');
const connection = new Sequelize(dbConfig);

User.init(connection);
User.associate(connection.models);
Tech.init(connection);
Tech.associate(connection.models);
Address.init(connection);
Address.associate(connection.models);

module.exports = connection;