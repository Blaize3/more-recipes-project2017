/*eslint-disable*/

const User = require('../models').User;

module.exports = {

    signup(request, response) {
        return User.create({
            email: request.body.email,
            username: request.body.username,
            password: request.body.password,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            isAuthenticated: false
        }).then((user) => {
            response.status(200).send({
                message: "acount was created successfully",
                Detail: user
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to create user account.",
            Error: error
        }));
    }, // closes createAUserAccount function
}; // closes module.exports Object