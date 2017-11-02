// import { User } from '../../models';
/**
 *
 *
 * @class UserIdBodyValidator
 */
class UserIdBodyValidator {
  /**
   *
   *
   * @static
   * @param {any} request
   * @param {any} response
   * @param {any} next
   * @returns  {object} The identifer ...
   * @memberof UserIdBodyValidator
   */
  static authentcatedUser(request, response, next) {
    if (isNaN(request.body.userId)) {
      response.status(401).send({
        message: 'Invalid User Id'
      });
      return null;
    }
    next();
  }
}
export default UserIdBodyValidator;
