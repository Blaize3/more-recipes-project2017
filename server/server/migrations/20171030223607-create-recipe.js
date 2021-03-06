

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
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'User',
          key: 'id',
          as: 'userId'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      origin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      ingredients: {
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
  down: queryInterface => queryInterface.dropTable('Recipes')
};
