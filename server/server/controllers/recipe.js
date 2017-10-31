import { Recipe } from '../models';
/**
 *
 *
 * @class HandleRecipeRequest
 */
class HandleRecipeRequest {
  /**
   *
   *
   * @static
   * @param {object} request
   * @param {object} response
   * @returns {HandleRecipeRequest} The identifier for ...
   * @memberof HandleRecipeRequest
   */
  static addRecipe(request, response) {
    return Recipe.create({
      userId: request.body.userId,
      name: request.body.name,
      origin: request.body.origin,
      description: request.body.description,
      ingredients: request.body.ingredients,
      instructions: request.body.instructions,
      upVote: request.body.upVote,
      downVote: request.body.downVote
    }).then((recipe) => {
      response.status(200).send({
        message: 'Recipe was added successfully',
        Details: recipe
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to create a recipe.',
      Error: error
    }));
  }
}// ends the class
export default HandleRecipeRequest;
