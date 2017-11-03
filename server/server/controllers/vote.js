import { Recipe, Favorite, Vote } from '../models';

/**
 *
 *
 * @class HandleVoteRequest
 */
class HandleVoteRequest {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {object} The identifier for ...
 * @memberof HandleVoteRequest
 */
  static vote(request, response) {
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

    if (request.query.votes === 'upVote' || request.query.votes === 'downVote') {
      //
      //
      const voteObject = {
        recipeId: request.params.recipeId,
        userId: request.body.userId,
        upVote: false,
        downVote: false
      };
      Vote.findOne({
        where: {
          recipeId: request.params.recipeId,
          $and: [{ userId: request.body.userId }]
        }
      }).then((vote) => {
        if (vote) {
          response.status(200).send({
            message: 'You have voted this recipe already.'
          });
          return null;
        }
        if (!vote) {
          Recipe.findOne({
            where: {
              id: request.params.recipeId
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
                id: request.params.recipeId
              }
            });
            Vote.create(voteObject).then(createdVote => response.status(200).send({
              status: '200 OK',
              message: `You have ${(request.query.votes === 'upVote' ? 'up voted' : 'down voted')} a Recipe.`,
              data: createdVote
            }));
          });
        }
      }).catch(() => response.status(500).send({
        status: '500 Server Error',
        message: 'Encountered error while trying to up vote or down vote a recipe.'
      }));
      //
      //
      //
    } else if (request.query.votes === 'favorite') {
      //
      //
      //
      Favorite.findOne({
        where: {
          recipeId: request.params.recipeId,
          $and: [{ userId: request.decoded.userID }]
        }
      }).then((favorite) => {
        if (favorite) {
          return favorite
            .destroy()
            .then(() => response.status(200).send({
              status: '204 OK No Content',
              message: 'You have unfavorited this recipe.'
            }))
            .catch(() => response.status(500).send({
              status: '500 Server Error',
              message: 'An error occured while trying to delete recipe.'
            }));
        }
        if (!favorite) {
          updateObject.favorite = true;
          Recipe.update(updateObject, {
            where: {
              id: request.params.recipeId
            }
          }).then(nestedRecipe => Favorite.create({
            recipeId: request.params.recipeId,
            userid: request.decoded.userID
          }).then(() => response.status(200).send({
            status: '200 OK',
            message: 'You favorited this recipe.',
            data: nestedRecipe
          })).catch(() => response.status(500).send({
            status: '500 Server Error',
            message: 'Encountered error while trying to add favorite a recipe.'
          }))).catch(() => response.status(500).send({
            status: '500 Server Error',
            message: 'An error occured while trying to modify recipe information.'
          }));
        }
      }).catch(() => response.status(500).send({
        status: '500 Server Error',
        message: 'Encountered error while trying to favorite a recipe.'
      }));
    }// ends if
  }
}
export default HandleVoteRequest;
