export default (sequelize, Sequelize) => {
    const Review = sequelize.define('Review', {
        recipeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        reviewBody: {
            type: Sequelize.TEXT,
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