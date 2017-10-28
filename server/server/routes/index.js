import HandleRecipeRequest from '../controllers/recipe';
import Validator from '../controllers/helpers/validator';

module.exports = (app) => {

    app.get('/api', (request, response) => response.status(200).send({
        message: 'Welcome to my actual API route'
    }));

    /// API endpoint for users to create account
    app.post('/api/users/signup', (request, response) => {

    });

    /// API endpoint for users to login to the application
    app.post('/api/users/signin', (request, response) => {

    });

    /// API route that allows authenticated user to add a recipe
    app.post('/api/recipes', (request, response) => {
        HandleRecipeRequest.addRecipe(request, response);
    });

    /// API route that allows authenticated user to modify a recipe they added
    app.put('/api/recipes/:recipeId', Validator.validateId, (request, response) => {
        HandleRecipeRequest.modifyRecipe(request, response);
    });

    /// API route that allows authenticated user to delete a recipe they added
    app.delete('/api/recipes/:recipeId', Validator.validateId, (request, response) => {
        HandleRecipeRequest.deleteRecipe(request, response);
    });

    /// API route that allows a user to get all the recipe in the application
    /// API route that allows a user to get just recipe with the most upvotes
    app.get('/api/recipes', (request, response) => {
        HandleRecipeRequest.getAllRecipes(request, response);
        // 2 routes
    });

    /// API route that allows authenticated user to post a review
    app.post('/api/recipes/:recipeId/reviews', Validator.validateId, (request, response) => {
        HandleRecipeRequest.postAReview(request, response);
    });

    /// API route that allows authenticated user to get all his/her favorite recipe
    app.get('/api/user/:userId/recipes', (request, response) => {

    });
};