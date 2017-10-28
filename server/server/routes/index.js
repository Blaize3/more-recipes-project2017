import HandleRecipeRequest from '../controllers/recipe';
import Validator from '../controllers/helpers/validator';

module.exports = (app) => {

    app.get('/api', (request, response) => response.status(200).send({
        message: 'Welcome to my actual API route'
    }));

    app.post('/api/recipes', (request, response) => {
        HandleRecipeRequest.addRecipe(request, response);
    });

    app.get('/api/recipes', (request, response) => {
        HandleRecipeRequest.getAllRecipes(request, response);
    });

    app.delete('/api/recipes/:recipeId', Validator.validateId, (request, response) => {
        HandleRecipeRequest.deleteRecipe(request, response);
    });

    app.put('/api/recipes/:recipeId', Validator.validateId, (request, response) => {
        HandleRecipeRequest.modifyRecipe(request, response);
    });

    app.post('/api/recipes/:recipeId/reviews', Validator.validateId, (request, response) => {
        HandleRecipeRequest.postAReview(request, response);
    });
};