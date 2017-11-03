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
   * @param {object} request
   * @param {object} response
   * @param {object} next
   * @returns {object} The identifer ...
   * @memberof UserIdBodyValidator
   */
  static authentcatedUser(request, response, next) {
    if (isNaN(request.params.userId)) {
      response.status(401).send({
        message: 'Invalid User Id: Id must be a number'
      });
      return null;
    }
    next();
  }
}
export default UserIdBodyValidator;
