module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Recipes', [{
    id: 1,
    userId: 1,
    name: 'Egusi Soup',
    origin: 'Nigeria',
    description: 'Egusi Soup is a delicacy eaten in eastern Nigeria.',
    ingredients: 'Egusi, palm oil, fish, crayfish, meat',
    instructions: '1. Boil your meat, 2. Add a fish',
    favorite: false,
    upVoteCount: 0,
    downVoteCount: 0,
    createdAt: '2017-11-01T12:44:36.184Z',
    updatedAt: '2017-11-01T12:44:36.184Z'
  }, {
    id: 2,
    userId: 1,
    name: 'Fried Rice',
    origin: 'Nigeria',
    description: 'Fried rice is eaten in most part of nigeria.',
    ingredients: 'Rice, meat',
    instructions: '1. Boil your meat, 2. Add a fish',
    favorite: false,
    upVoteCount: 0,
    downVoteCount: 0,
    createdAt: '2017-11-01T12:44:36.184Z',
    updatedAt: '2017-11-01T12:44:36.184Z'
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recipes', null, {})
};
