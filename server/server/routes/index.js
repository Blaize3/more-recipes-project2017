

import HandleUserRequest from '../controllers/user';
import HandleRecipeRequest from '../controllers/recipe';
import HandleReviewRequest from '../controllers/review';

import UserIdBodyValidator from '../controllers/helpers/userReqParam'; // isAuthenticatedParams
import isAuthenticatedBody from '../controllers/helpers/userReqBody';
import RecipeParamsValidator from '../controllers/helpers/recipeIdValidator';

export default (app) => {
  // API endpoints for users to create accounts in application:
  // POST : /api/users/signup
  app.post('/api/v1/users/signup', HandleUserRequest.signup);

  // API endpoints for users login to the application:
  // POST : /api/users/signin
  app.post('/api/v1/users/signin', HandleUserRequest.signin);

  // An API route that allows authenticated user to add a recipe:
  // POST : /api/recipes
  app.post('/api/v1/recipes', isAuthenticatedBody.authentcatedUser, HandleRecipeRequest.addRecipe);

  // An API route that allows authenticated user to modify a recipe they added
  // PUT : /api/recipes/<recipeId>
  app.put('/api/v1/recipes/:recipeId', RecipeParamsValidator.validateRecipeId, isAuthenticatedBody.authentcatedUser, HandleRecipeRequest.modifyRecipe);

 // An API route that allows authenticated user to delete a recipe they added
  // DELETE : /api/recipes/<recipeId>
  app.delete('/api/v1/recipes/:recipeId', RecipeParamsValidator.validateRecipeId, HandleRecipeRequest.deleteRecipe);
}; // closes module.exports Object
