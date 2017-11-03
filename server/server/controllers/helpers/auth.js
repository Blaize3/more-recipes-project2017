/*eslint-disable*/

import jwt from 'jsonwebtoken';
import { User } from '../../models';
import secret from '../../../../config';
/**
 *
 *
 * @class CheckUserAuthentication
 */
class CheckUserAuthentication {
/**
 *
 *
 * @static
 * @param {object} request
 * @param {object} response
 * @param {object} next
 * @returns {object} The identifer ...
 * @memberof CheckUserAuthentication
 */
  static doAuthentication(request, response, next) {
    const token = request.body.token || request.query.token || request.headers['x-access-token'];

  if (token) {

        jwt.verify(token, secret.secret, function(err, decoded) {      
          if (err) {
            return response.send({
              status: 'error', 
              message: 'Failed to authenticate token.' });    
          } else {
            console.log(decoded)
            User.findOne({
                  id: decoded.userID
                }).then((user) => {
                  if (!user) {
                    response.status(401).send({
                      status: 'error',
                      message: 'Access Denied, please proceed to log in'
                    });
                    return null;
                  }
                  console.log(user);
                  request.decoded = decoded;
                  next();
                }).catch(error => response.status(403).send({
                  status: 'error',
                  message: 'No token'
                }));
          }
        });
    
      } else {

        return response.status(403).send({ 
          status: 'error', 
          message: 'No token provided.' 
        });
    
      }
  }
}
export default CheckUserAuthentication;
