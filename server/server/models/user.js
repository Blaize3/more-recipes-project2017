
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
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Recipe, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Review, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Favorite, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Vote, {
      foreignKey: 'userId'
    });
  };
  return User;
};
