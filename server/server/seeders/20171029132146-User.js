'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.bulkInsert('User', [{
            email: "akugbeode@gmail.com",
            username: "blaize3",
            password: "oghogho@ ",
            firstname: "Akugbe",
            lastname: "Ode",
            isAuthenticated: false
        }, {
            email: "trailblaizer34@gmail.com",
            username: "Don_Ode",
            password: "mpassword@1",
            firstname: "Muah",
            lastname: "Me",
            isAuthenticated: false
        }, {
            email: "egbeode@yahoo.com",
            username: "precious4real2017",
            password: "egbeoode",
            firstname: "Egbe",
            lastname: "Ode",
            isAuthenticated: false
        }], {});
    },

    down: (queryInterface, Sequelize) => {

        queryInterface.bulkDelete('User', null, {});
    }
};