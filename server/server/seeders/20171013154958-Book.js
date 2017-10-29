/*eslint-disable*/

'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.bulkInsert('Books', [{
            id: 510,
            isbn: '978-1-86197-641-3',
            title: 'Art of seduction',
            genre: 'Inspirational',
            author: 'Robert Greene',
            publisher: 'Profile Books',
            year: '2003',
            summary: null,
            pages: 207,
            available: true,
            qtyStocked: 3,
            qtyAvailable: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 511,
            isbn: '978-1-881273-15-8',
            title: 'The five love languages',
            genre: 'Romance',
            author: 'Gary Chapman',
            publisher: 'Printcorp',
            year: '2004',
            summary: null,
            pages: 206,
            available: true,
            qtyStocked: 5,
            qtyAvailable: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 513,
            isbn: '978-0-553-38449-9',
            title: 'Social Intelligence',
            genre: 'Science',
            author: 'Daniel Goleman',
            publisher: 'Bantam Books',
            year: '2006',
            summary: null,
            pages: 405,
            available: true,
            qtyStocked: 3,
            qtyAvailable: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Books', null, {});
    }
};