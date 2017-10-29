'use strict';
module.exports = (sequelize, DataTypes) => {
    var Review = sequelize.define('Review', {
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviewBody: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
    Review.associate = (models) => {
        Review.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });

        Review.belongsTo(models.Recipe, {
            foreignKey: "recipeId",
            onDelete: "CASCADE"
        });
    }
    return Review;
};