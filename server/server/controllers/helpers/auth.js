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
    const token = request.body.token || request.body.token || request.headers['x-access-token'];
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret.secret);
    } catch (e) {
      return response.status(500).send({
        status: 'error',
        message: 'Token verification failed.'
      });
    }

    if (!decoded){

    }else{
    User.findOne({
      id: decoded.payload.userID
    }).then().catch();
    next();
    }
  }
}
export default CheckUserAuthentication;
