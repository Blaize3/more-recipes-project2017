import { Recipe } from '../models';
// import Token from './helpers/token';
/**
 *
 *
 * @class HandleRecipeRequest
 */
class HandleRecipeRequest {
  // const decodedInfo = Token.decryptToken(request.headers['x-access-token']);
  // console.log('\n\n\n', decodedInfo.payload.userId, '\n\n\n');


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
      userId: request.decoded.userID,
      name: request.body.name,
      origin: request.body.origin,
      description: request.body.description,
      ingredients: request.body.ingredients,
      instructions: request.body.instructions,
      favorite: false,
      upVoteCount: 0,
      downVoteCount: 0
    }).then((recipe) => {
      response.status(200).send({
        status: '200 OK',
        message: 'Recipe was added successfully',
        data: recipe
      });
    }).catch(() => response.status(500).send({
      status: '500 Server Error',
      message: 'An error occured while trying to create a recipe.'
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
      userId: request.decoded.userID,
      name: request.body.name,
      origin: request.body.origin,
      description: request.body.description,
      ingredients: request.body.ingredients,
      instructions: request.body.instructions,
      favorite: request.body.favorite,
      upVote: request.body.upVote,
      downVote: request.body.downVote
    };

    return Recipe.update(updateObject, {
      where: {
        id: request.params.recipeId
      }
    }).then((recipe) => {
      response.status(200).send({
        status: '200 OK',
        message: 'update was successful',
        data: recipe
      });
    }).catch(() => response.status(500).send({
      status: '500 Server Errorr',
      message: 'An error occured while trying to modify recipe information.'
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
          return response.status(404).send({
            status: '404 Not Found',
            message: 'Recipe Not Found'
          });
        }
        return recipe
          .destroy()
          .then(() => response.status(200).send({
            status: '204 OK No Content',
            message: 'Recipe was deleted successfully'
          }))
          .catch(() => response.status(500).send({
            status: '500 Server Error',
            message: 'An error occured while trying to delete recipe.'
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
    if ((request.params.sort === 'upvotes') && (request.params.order === 'desc')) {
      Recipe.findAll({ limit: 5, order: [['upvote', 'DESC']] })
        .then((recipes) => {
          if (recipes.length <= 0) {
            response.status(404).send({
              status: '404 Not Found',
              message: 'Recipe Not Found'
            });
          }
          //  message: `${recipes.length} ${(recipes.length === 1 ? 'recipe' : 'recipes')} was found.`,
          //  Recipes:
          return response.status(200).send({
            status: '200 OK',
            message: `${recipes.length} ${(recipes.length === 1 ? 'recipe' : 'recipes')} was found.`,
            data: recipes
          });
        }).catch(() => response.status(500).send({
          status: '500 Server Error',
          message: 'An error occured while trying to retrieving all sorted recipe.'
        }));
    } else {
      Recipe.findAll()
        .then((recipes) => {
          if (recipes.length <= 0) {
            response.status(404).send({
              status: '404 Not Found',
              message: 'Recipe Not Found'
            });
          }
          response.status(200).send({
            status: '200 OK',
            message: `${recipes.length} ${(recipes.length === 1 ? 'recipe' : 'recipes')} was found.`,
            data: recipes
          });
        }).catch(() => response.status(500).send({
          status: '500 Server Error',
          message: 'An error occured while trying to retrieving all recipe.'
        }));
    }
  }
}// ends the class
export default HandleRecipeRequest;
