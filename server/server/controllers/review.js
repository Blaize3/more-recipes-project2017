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
      userId: request.decoded.userID,
      comment: request.body.comment
    }).then((review) => {
      response.status(200).send({
        status: '200 OK',
        message: 'Review was added to Recipe successfully',
        data: review
      });
    }).catch(() => response.status(500).send({
      status: '500 Server Error',
      message: 'An error occured while trying to adding a review.'
    }));
  }
}
export default HandleReviewRequest;
