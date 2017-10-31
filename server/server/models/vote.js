

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upVote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    downVote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  Vote.associate = (models) => {
    Vote.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

    Vote.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE'
    });
  };
  return Vote;
};
