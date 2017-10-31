// An API route that allows authenticated user to add a recipe:
  // POST : /api/recipes
  app.post('/api/v1/recipes', isAuthenticatedBody.authentcatedUser, HandleRecipeRequest.addRecipe);
  
    // An API route that allows authenticated user to modify a recipe they added
    // PUT : /api/recipes/<recipeId>
    app.put('/api/v1/recipes/:recipeId', isValidRecipeId.validateRecipeId, isAuthenticatedBody.authentcatedUser, HandleRecipeRequest.modifyRecipe);
  
    // An API route that allows authenticated user to delete a recipe they added
    // DELETE : /api/recipes/<recipeId>
    app.delete('/api/v1/recipes/:recipeId', isValidRecipeId.validateRecipeId, HandleRecipeRequest.deleteRecipe);
  
    // An API route that allows a user to get all the recipes in the application
    // GET : /api/recipes
    //                            Or
    // An API route that allows a user to get just recipes with the most upvotes
    // GET : /api/recipes?sort=upvotes&order=desc
    app.get('/api/v1/recipes', HandleRecipeRequest.getAllRecipes);
  
    // An API route that allows an authenticated user post a review for a recipe
    // POST : /api/recipes/<recipeId>/reviews
    app.post('/api/v1/recipes/:recipeId/reviews', isValidRecipeId.validateRecipeId, isAuthenticatedBody.authentcatedUser, HandleReviewRequest.addReview);
  
    // An API route that allows an authenticated user to get all his/her favorite recipes
    // GET : /api/users/<userId>/recipes
    app.post('/api/v1/users/:userId/recipes', UserIdBodyValidator.authentcatedUser, HandleReviewRequest.addReview);