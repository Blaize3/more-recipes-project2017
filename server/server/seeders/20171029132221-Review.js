'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.bulkInsert('Review', [{
            recipeId: '1',
            userId: 2,
            review: "I am review"
        }, {
            recipeId: '2',
            userId: 1,
            review: "I am review 2"
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('Review', null, {});
    }
};