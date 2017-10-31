import { Review } from '../models';
/**
 *
 *
 * @class HandleReviewRequest
 */
class HandleReviewRequest {
/**
 *
 *
 * @static
 * @param {object} request
 * @param {object} response
 * @returns {object} The identifier for ...
 * @memberof HandleReviewRequest
 */
  static addReview(request, response) {
    return Review.create({
      recipeId: request.params.recipeId,
      userId: request.body.userId,
      comment: request.body.comment
    }).then((review) => {
      response.status(200).send({
        message: 'Review was added to Recipe successfully',
        Detail: review
      });
    }).catch(error => response.status(200).send({
      fatal: 'An error occured while trying to adding a review.',
      Error: error
    }));
  }
}
export default HandleReviewRequest;
