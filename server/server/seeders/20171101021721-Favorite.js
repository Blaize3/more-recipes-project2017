module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Favorites', [{
    id: 1,
    recipeId: 2,
    userId: 2,
    updatedAt: '2017-11-01T02:23:59.448Z',
    createdAt: '2017-11-01T02:23:59.448Z'
  }, {
    id: 2,
    recipeId: 2,
    userId: 1,
    updatedAt: '2017-11-01T02:23:59.448Z',
    createdAt: '2017-11-01T02:23:59.448Z'
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Favorites', null, {})
};
