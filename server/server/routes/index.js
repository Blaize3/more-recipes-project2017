

import HandleUserRequest from '../controllers/user';
import HandleRecipeRequest from '../controllers/recipe';
import HandleReviewRequest from '../controllers/review';

import UserIdBodyValidator from '../controllers/helpers/userReqParam'; // isAuthenticatedParams
import isAuthenticatedBody from '../controllers/helpers/userReqBody';
import isValidRecipeId from '../controllers/helpers/recipeIdValidator';

export default (app) => {
  // API endpoints for users to create accounts in application:
  // POST : /api/users/signup
  app.post('/api/v1/users/signup', HandleUserRequest.signup);

  // API endpoints for users login to the application:
  // POST : /api/users/signin
  app.post('/api/v1/users/signin', HandleUserRequest.signin);

}; // closes module.exports Object
