'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isAuthenticated: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Recipe, {
            foreignKey: "userId"
        });

        User.hasMany(models.Review, {
            foreignKey: "userId"
        });
    }
    return User;
};