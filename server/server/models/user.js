export default (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    User.associate = (models) => {
        User.hasMany(models.Recipe, {
            foreignKey: "userId",
            as: "creator"
        });

        User.hasMany(models.Review, {
            foreignKey: "userId",
            as: "writer"
        });
    }
    return User;
};