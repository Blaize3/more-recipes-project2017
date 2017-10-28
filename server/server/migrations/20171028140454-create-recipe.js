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
                type: Sequelize.INTEGER,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            origin: {
                type: Sequelize.STRING,
                allowNull: true
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            ingredints: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            instructions: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            upVote: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            downVote: {
                type: Sequelize.INTEGER,
                allowNull: false
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