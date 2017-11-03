
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
            status: '400 Bad Request',
            message: 'An error occured while trying to hash user password.'
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
            status: '200 OK',
            message: 'acount was created successfully',
            data: user
          });
        }).catch(() => response.status(500).send({
          status: '500 Server Error',
          message: 'An error occured while trying to create user account.'
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
          response.status(400).send({
            status: '400 Bad Request',
            message: 'An error occured while trying to unhash user password.'
          });
        } else if (res) {
          const payload = { userID: user.id, email: user.email };
          const token = generator.generateToken(payload);
          // jwt.sign(payload, config.secret);
          response.status(200).send({
            status: '200 OK',
            message: 'Access granted',
            data: user,
            token
          });
        } else {
          response.status(401).send({
            status: '401 Unauthorized',
            message: 'invalid Password'
          });
        }
      });
    }).catch(() => response.status(500).send({
      status: '500 Server Error',
      message: 'An error occured while trying to sign in a user.'
    }));
  }
}
export default HandleUserRequest;
