import { Recipe, Favorite, Vote } from '../models';
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
      upVoteCount: request.body.upVoteCount,
      downVoteCount: request.body.downVoteCount
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
      favorite: request.body.favorite,
      upVote: request.body.upVote,
      downVote: request.body.downVote
    };
    //
    //
    if (request.query.votes === 'upVote' || request.query.votes === 'downVote') {
      const voteObject = {
        recipeId: request.params.recipeId,
        userId: request.body.userId,
        upVote: null,
        downVote: null
      };
      Vote.findOne({
        where: {
          recipeId: request.params.recipeId,
          $and: [{ userId: request.body.userId }]
        }
      }).then((vote) => {
        if (vote) {
          response.status(401).send({
            message: 'You have voted this recipe already.'
          });
          return null;
        }
        if (!vote) {
          Recipe.findOne({
            where: {
              recipeId: request.params.recipeId
            }
          }).then((recipe) => {
            if (request.query.votes === 'upVote') {
              recipe.upVoteCount += 1;
              voteObject.upVote = true;
            } else {
              recipe.downVoteCount += 1;
              voteObject.downVote = true;
            }
            Recipe.update(recipe, {
              where: {
                recipeId: request.params.recipeId
              }
            });
            Vote.create(voteObject).then((createVote) => {
              return response.status(200).send({
                message: `You have ${( request.query.votes === 'upVote' ? 'up voted' : 'down voted')} a Recipe.`,
                Details: createVote
              });
            });
          });
        }
      }).catch(error => response.status(400).send({
        message: 'Encountered error while trying to up vote or down vote a recipe.',
        Error: error
      }));
      //
      //  ends upVote
      //
    } else if (request.query.votes === 'favorite') {
      Favorite.findOne({
        where: {
          recipeId: request.params.recipeId,
          $and: [{ userId: request.body.userId }]
        }
      }).then((favorite) => {
        if (favorite) {
          response.status(401).send({
            message: 'You have favorited this recipe already.'
          });
          return null;
        }
        if (!favorite) {
          updateObject.favorite = true;
          Recipe.update(updateObject, {
            where: {
              id: request.params.recipeId
            }
          }).then(nestedRecipe => Favorite.create({
            recipeId: request.params.recipeId,
            userid: request.body.userId
          }).then(() => response.status(200).send({
            message: 'You favorited this recipe.',
            Detail: nestedRecipe
          })).catch(error => response.status(400).send({
            message: 'Encountered error while trying to add favorite a recipe.',
            Error: error
          }))).catch(error => response.status(400).send({
            fatal: 'An error occured while trying to modify recipe information.',
            Error: error
          }));
        }
      }).catch(error => response.status(400).send({
        message: 'Encountered error while trying to favorite a recipe.',
        Error: error
      }));
      //
      //     ends favorite recipe
      //
    } else {
      //
      //     Modify Routes handler
      //
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
  /**
 *
 *
 * @param {any} request
 * @param {any} response
 * @returns {object} The identifier for ...
 * @memberof HandleRecipeRequest
 */
  static getSortUpVote(request, response) {
    return Recipe.findAll({
      order: [
        ['upvote', 'DESC']
      ]
    }).then((recipes) => {

    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to retrieving all recipe.',
      Error: error
    }));
  }
}// ends the class
export default HandleRecipeRequest;
