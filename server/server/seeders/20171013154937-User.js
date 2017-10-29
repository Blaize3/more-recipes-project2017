/*eslint-disable*/

'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.bulkInsert('Users', [{
            id: 410,
            email: 'akugbeode@yahoo.com',
            username: 'blaize3',
            password: 'oghogho@1',
            userCategory: 'user',
            membership: 'silver',
            firstname: 'Akugbe',
            othrenames: null,
            lastname: 'Ode',
            dateOfBirth: '1986-8-6',
            mobileNumber: '07052858059',
            blacklisted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 411,
            email: 'grantus@gmail.com',
            username: 'zargrantus',
            password: 'zargrantus@1',
            userCategory: 'user',
            membership: 'bronze',
            firstname: 'Grant',
            othrenames: null,
            lastname: 'Nwaigwe',
            dateOfBirth: '1993-4-26',
            mobileNumber: '07057367052',
            blacklisted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 413,
            email: 'kingsly2017ng@gmail.com',
            username: 'kingsly2000',
            password: 'chinky777',
            userCategory: 'user',
            membership: 'gold',
            firstname: 'Oluchukwu',
            othrenames: 'kingsley',
            lastname: 'Nwaigwe',
            dateOfBirth: '1981-7-9',
            mobileNumber: '080555402788',
            blacklisted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.bulkDelete('Users', null, {});
    }
};