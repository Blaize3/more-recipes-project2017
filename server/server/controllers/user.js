
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';
// import config from '../../../config';
import generator from './helpers/token';


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
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(request.body.password, salt, (err, hash) => {
        // 0000000000000000000000000000000000000000000
        if (err) {
          response.status(400).send({
            Error: 'An error occurred'
          });
        }
        return User.create({
          email: request.body.email,
          username: request.body.username,
          password: hash,
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

        // 00000000000000000000000000000000000000000
      });
    });
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
    // const password = request.body.password;
    return User.findOne({
      where: {
        $or: [
          { username: request.body.username },
          { email: request.body.email }
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


      // Load hash from your password DB.
      bcrypt.compare(request.body.password, hash, (err, res) => {
        if (err) {
          response.status(400).send({ error: 'An error occured' });
        } else if (res) {
          const payload = { userID: user.id, email: user.email };
          const token = generator.generateToken(payload);
          // jwt.sign(payload, config.secret);
          response.status(200).send({
            message: 'Access granted',
            Details: user,
            token
          });
        } else {
          response.status(200).send({ message: 'invalid Password' });
        }
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to sign in a user.',
      Error: error
    }));
  }
}
export default HandleUserRequest;
