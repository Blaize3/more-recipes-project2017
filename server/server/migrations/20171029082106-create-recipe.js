'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Recipes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            origin: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            ingredints: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            instructions: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            upVote: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            downVote: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        queryInterface.dropTable('Recipes');
    }
};