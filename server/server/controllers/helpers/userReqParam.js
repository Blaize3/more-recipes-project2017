import { User } from '../../models';
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
        message: 'Invalid User Id'
      });
      return null;
    }
    User.findOne({
      where: {
        id: request.params.userId
      }
    }).then((user) => {
      if (!user) {
        response.status(401).send({
          message: 'Access Denied!'
        });
        return null;
      }
      next();
    }).catch(error => response.status(400).send({
      message: 'User authentication helper encountered while trying to verify user details.',
      Error: error
    }));
  }
}
export default UserIdBodyValidator;
