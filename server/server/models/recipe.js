
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    upVote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    downVote: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Recipe.associate = (models) => {
    Recipe.hasMany(models.Review, {
      foreignKey: 'userId'
    });

    Recipe.hasMany(models.Favorite, {
      foreignKey: 'recipeId'
    });

    Recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Recipe;
};
