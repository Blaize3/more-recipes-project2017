import { Recipe } from '../../models';
/**
 *
 *
 * @class UserIdBodyValidator
 */
class RecipeParamsValidator {
  /**
   *
   *
   * @static
   * @param {object} request
   * @param {object} response
   * @param {object} next
   * @returns {object} The identifer ...
   * @memberof RecipeParamsValidator
   */
  static validateRecipeId(request, response, next) {
    if (isNaN(request.params.recipeId)) {
      response.status(401).send({
        message: 'Invalid Recipe Id: Id must be a number'
      });
      return null;
    }
    Recipe.findOne({
      where: {
        id: request.params.recipeId
      }
    }).then((user) => {
      if (!user) {
        response.status(401).send({
          message: 'Recipe Not Found!'
        });
        return null;
      }
      next();
    }).catch(error => response.status(400).send({
      message: 'Recipe validation helper encountered error while trying to validate a recipe.',
      Error: error
    }));
  }
}
export default RecipeParamsValidator;
