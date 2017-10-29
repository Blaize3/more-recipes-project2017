/* eslint-disable */

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.User = require('./user')(sequelize, Sequelize);
db.Recipe = require('./recipe')(sequelize, Sequelize);
db.Review = require('./review')(sequelize, Sequelize);

//Associations
db.User.hasMany(db.Recipe, { foreignKey: "userId" });
db.User.hasMany(db.Review, { foreignKey: "userId" });
db.Review.hasMany(db.Review, { foreignKey: "recipeId" });
db.Recipe.belongsTo(db.User, { foreignKey: "userId" });
db.Review.belongsTo(db.User, { foreignKey: "userId" });
db.Review.belongsTo(db.Recipe, { foreignKey: "recipeId" });

module.exports = db;