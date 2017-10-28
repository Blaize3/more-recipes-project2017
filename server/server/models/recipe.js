export default (sequelize, Sequelize) => {
    const Recipe = sequelize.define('Recipe', {
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
        }
    });

    Recipe.associate = (models) => {
        Recipe.hasMany(models.Review, {
            foreignKey: "userId",
            as: "recipe reviewed"
        });

        Recipe.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    }
    return Recipe;
};