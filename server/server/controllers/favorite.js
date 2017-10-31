import { Favorite } from '../models';
/**
 *
 *
 * @class HandleFavoriteRequest
 */
class HandleFavoriteRequest {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {object} The identifier for ...
 * @memberof HandleFavoriteRequest
 */
  static addFavorite(request, response) {
    return Favorite.create({
      recipeId: request.body.recipeId,
      userId: request.params.userId
    }).then((favorite) => {
      response.status(200).send({
        message: `Recipe ${favorite.recipeId} was favorited by ${favorite.userId}`,
        Details: favorite
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to favorite a recipes.',
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
 * @memberof HandleFavoriteRequest
 */
  static retrieveFavorites(request, response) {
    return Favorite.findAll({
      where: {
        userId: request.params.userId
      }
    }).then((favorites) => {
      if (favorites.length <= 0) {
        response.status(200).send({
          message: `User  ${request.params.userId}  has no favorite recipe`,
        });
        return;
      }
      response.status(200).send({
        message: `${favorites.length} ${(favorites.length === 1 ? 'recipe' : 'recipes')} was found`,
        Recipes: favorites
      });
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to retrieve favorite recipes.',
      Error: error
    }));
  }
}
export default HandleFavoriteRequest;
