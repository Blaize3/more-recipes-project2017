/*eslint-disable*/

const User = require('../../models').User;

module.exports = {
    authentcatedUser(request, response, next) {
        if (isNaN(request.params.userId)) {
            response.status(401).send({
                message: "Invalid User Id"
            });
            return null;
        } else {
            User.findOne({
                where: {
                    id: request.params.userId
                }
            }).then((user) => {
                if (!user) {
                    response.status(401).send({
                        message: "Access Denied!"
                    });
                    return null;
                }
                next();
            }).catch((error) => response.status(400).send({
                message: 'User authentication helper encountered while trying to verify user details.',
                Error: error
            }));
        }
    }
};