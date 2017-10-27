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

    static modifyRecipe(request, response) {
        const _recipeId = request.params.recipeId;
        Recipes[_recipeId].id = _recipeId;
        Recipes[_recipeId].name = request.body.name;
        Recipes[_recipeId].origin = request.body.origin;
        Recipes[_recipeId].description = request.body.description;
        Recipes[_recipeId].ingredients = request.body.ingredients;
        Recipes[_recipeId].instructions = request.body.instructions;
        Recipes[_recipeId].upVotes = request.body.reviewCount;
        Recipes[_recipeId].downVotes = request.body.reviewCount;

        response.status(200).send({
            message: "Update was successful",
            Details: Recipes[_recipeId]
        });
    }
}

export default HandleRecipeRequest;