/*eslint-disable*/

'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Borrows', [{
            id: 610,
            borrowId: '201710140000001',
            userId: 410,
            bookId: 513,
            returnDueDate: '2017-10-21',
            returnedDate: null,
            status: 'not returned',
            isDelayed: false,
            daysDelayed: 0,
            isFined: false,
            fine: 'no fine',
            isFinePaid: false,
            fineOptions: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 611,
            borrowId: '201710140000002',
            userId: 411,
            bookId: 510,
            returnDueDate: '2017-10-21',
            returnedDate: null,
            status: 'not returned',
            isDelayed: false,
            daysDelayed: 0,
            isFined: false,
            fine: 'no fine',
            isFinePaid: false,
            fineOptions: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 612,
            borrowId: '201710140000003',
            userId: 410,
            bookId: 511,
            returnDueDate: '2017-10-21',
            returnedDate: null,
            status: 'not returned',
            isDelayed: false,
            daysDelayed: 0,
            isFined: true,
            fine: 'no fine',
            isFinePaid: false,
            fineOptions: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Borrows', null, {});
    }
};