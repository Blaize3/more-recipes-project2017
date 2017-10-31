
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';
import config from '../../../config';

/**
 *
 *
 * @class HandleUserRequest
 */
class HandleUserRequest {
  /**
   *
   *
   * @static
   * @param {object} request
   * @param {object} response
   * @returns {object} The identifier for ...
   * @memberof HandleUserRequest
   */
  static signup(request, response) {
    let hashedPassword = '';
    bcrypt.hash(request.body.password, 10, (err, bcryptedPassword) => {
      hashedPassword = bcryptedPassword;
    });
    return User.create({
      email: request.body.email,
      username: request.body.username,
      password: hashedPassword,
      firstname: request.body.firstname,
      lastname: request.body.lastname
    }).then((user) => {
      response.status(200).send({
        message: 'acount was created successfully',
        Detail: user
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to create user account.',
      Error: error
    }));
  } // closes createAUserAccount function
  /**
 *
 *
 * @static
 * @param {object} request
 * @param {object} response
 * @returns {HandleUserRequest} The identifier for ...
 * @memberof HandleUserRequest
 */
  static signin(request, response) {
    return User.findOne({
      where: {
        $or: [
          { username: request.body.username },
          { email: request.body.email },
        ]
      }
    }).then((user) => {
      if (!user) {
        response.status(401).send({
          message: 'Invalid Username!'
        });
        return;
      }
      const hash = user.password;
      bcrypt.compare(request.body.password, hash, (err, unHashedPassword) => {
        if (unHashedPassword) {
          const token = jwt.sign(user.id, config.secret);
          response.status(200).send({
            message: 'Access granted',
            Details: user,
            token
          });
        } else {
          response.status(401).send({
            message: 'Invalid Password!'
          });
        }
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to sign in a user.',
      Error: error
    }));
  }
}
export default HandleUserRequest;
