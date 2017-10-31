

export default {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Recipe', [{
      userId: '1',
      name: 'Fried Rice',
      origin: 'Nigeria',
      description: 'Boil rice',
      ingredients: 'Rice, beans, yam',
      instructions: '1. good, 2. roast',
      upVote: '2',
      downVote: '100',
    }, {
      userId: '2',
      name: 'Yam pepper soup',
      origin: 'Nigeria',
      description: 'boil yam for 10 minutes',
      ingredients: '1. yam, 2. fish',
      instructions: '1. good, 2. roast',
      upVote: '20',
      downVote: 3
    }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recipe', null, {})
};
