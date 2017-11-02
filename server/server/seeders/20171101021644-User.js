module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: 1,
    email: 'akugbeode@yahoo.com',
    username: 'blaize3',
    password: '',
    firstname: 'Akugbe',
    lastname: 'Ode',
    updatedAt: '2017-11-01T02:15:01.186Z',
    createdAt: '2017-11-01T02:15:01.186Z'
  }, {
    id: 2,
    email: 'grant@gmail.com',
    username: 'grant99',
    password: '',
    firstname: 'Grant',
    lastname: 'Nwaigwe',
    updatedAt: '2017-11-01T02:23:59.448Z',
    createdAt: '2017-11-01T02:23:59.448Z'
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
