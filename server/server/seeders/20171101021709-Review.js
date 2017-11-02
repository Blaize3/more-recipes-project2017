module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [{
    id: 1,
    userId: 1,
    recipeId: 2,
    comment: 'This is a review.',
    updatedAt: '2017-11-01T02:23:59.448Z',
    createdAt: '2017-11-01T02:23:59.448Z'
  }, {
    id: 2,
    userId: 2,
    recipeId: 2,
    comment: 'This is a review.',
    updatedAt: '2017-11-01T02:23:59.448Z',
    createdAt: '2017-11-01T02:23:59.448Z'

  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Reviews', null, {})
};
