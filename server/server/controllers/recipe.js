/*eslint-disable*/
import Recipes from '../models/recipe';
// import Review from '../models/review';

class HandleRecipeRequest {
    // 1 API route handler that allows a user to deiete a recipe
    static addRecipe(request, response) {
        const recipeId = (Recipes.length <= 0 ? 0 : Recipes.length);
        const recipeObject = {
            id: recipeId,
            name: request.body.name,
            origin: request.body.origin,
            description: request.body.description,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            reviews: request.body.reviews,
            reviewCount: request.body.reviewCount,
            voteCount: request.body.voteCount
        };

        Recipes.push(recipeObject);
        response.status(200).send({
            message: 'Recipe was successfully added',
            Details: Recipes[Recipes.length - 1]
        });
    }
}

export default HandleRecipeRequest;