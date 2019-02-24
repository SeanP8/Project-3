'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const googledb = {};

let sequelize;
if (config.useEnvVariable) {
  sequelize = new Sequelize(process.env[config.useEnvVariable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    googledb[model.name] = model;
  });

Object.keys(googledb).forEach(modelName => {
  if (googledb[modelName].associate) {
    googledb[modelName].associate(googledb);
  }
});

googledb.sequelize = sequelize;
googledb.Sequelize = Sequelize;

module.exports = googledb;
