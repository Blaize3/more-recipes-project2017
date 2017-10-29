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


    signin(request, response) {
        return User.findOne({
            where: {
                $or: [
                    { username: request.body.username },
                    { email: request.body.email },
                ],
                password: request.body.password
            }
        }).then((user) => {
            if (!user) {
                response.status(401).send({
                    message: 'Access Denied!',
                    details: 'Invalid Username or Password!'
                });
            }
            response.status(200).send({
                message: 'Access granted',
                Details: user
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to sign in a user.",
            Error: error
        }));
    },
}; // closes module.exports Object