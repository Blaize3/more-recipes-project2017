

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'Recipe',
          key: 'id',
          as: 'recipeId'
        }
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
      upVote: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      downVote: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
  down: queryInterface => queryInterface.dropTable('Votes')
};
