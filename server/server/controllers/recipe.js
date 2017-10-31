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
  /**
 *
 *
 * @static
 * @param {object} request
 * @param {object} response
 * @returns {object} The identifier for ...
 * @memberof HandleRecipeRequest
 */
  static modifyRecipe(request, response) {
    const updateObject = {
      userId: request.body.userId,
      name: request.body.name,
      origin: request.body.origin,
      description: request.body.description,
      ingredients: request.body.ingredients,
      instructions: request.body.instructions,
      upVote: request.body.upVote,
      downVote: request.body.downVote
    };
    return Recipe.update(updateObject, {
      where: {
        id: request.params.recipeId
      }
    }).then((recipe) => {
      response.status(200).send({
        message: 'update was successful',
        Detail: recipe
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to modify recipe information.',
      Error: error
    }));
  }
  /**
 *
 *
 * @param {any} request
 * @param {any} response
 * @returns {object} The identifier for ...
 * @memberof HandleRecipeRequest
 */
  static deleteRecipe(request, response) {
    Recipe.findById(request.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return response.status(400).send({
            message: 'Recipe Not Found'
          });
        }
        return recipe
          .destroy()
          .then(() => response.status(200).send({
            message: 'Recipe was deleted successfully'
          }))
          .catch(error => response.status(400).send({
            fatal: 'An error occured while trying to delete recipe.',
            Error: error
          }));
      });
  }
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {object} The identifier for ...
 * @memberof HandleRecipeRequest
 */
  static getAllRecipes(request, response) {
    return Recipe.findAll()
      .then((recipes) => {
        if (recipes.length <= 0) {
          response.status(200).send({
            message: 'No Recipe Found',
          });
        }
        response.status(200).send({
          message: `${recipes.length} ${(recipes.length === 1 ? 'Recipe' : 'Recipes')} was Found.`,
          Details: recipes
        });
      }).catch(error => response.status(400).send({
        fatal: 'An error occured while trying to retrieving all recipe.',
        Error: error
      }));
  }
}// ends the class
export default HandleRecipeRequest;
