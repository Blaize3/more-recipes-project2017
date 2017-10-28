import Recipes from '../models/recipe';
import Review from '../models/review';

class HandleRecipeRequest {
    // 1 API route handler that allows a user to deiete a recipe
    static addRecipe(request, response) {
        const recipeId = (Recipes.length <= 0 ? 0 : Recipes.length);
        const recipeObject = {
            id: request.body.id,
            name: request.body.name,
            origin: request.body.origin,
            description: request.body.description,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            upVotes: request.body.reviews,
            downVotes: request.body.reviewCount,
        };

        Recipes.push(recipeObject);
        response.status(200).send({ message: "Recipe was created" });
    }

    static modifyRecipe(request, response) {
        const _recipeId = request.params.recipeId;
        Recipes[_recipeId].id = _recipeId;
        Recipes[_recipeId].name = request.body.name;
        Recipes[_recipeId].origin = request.body.origin;
        Recipes[_recipeId].description = request.body.description;
        Recipes[_recipeId].ingredients = request.body.ingredients;
        Recipes[_recipeId].instructions = request.body.instructions;
        Recipes[_recipeId].upVotes = request.body.upVotes;
        Recipes[_recipeId].downVotes = request.body.downVotes;

        response.status(200).send({
            message: "Update was successful"
        });
    }

    //3 API route handler that allows a user delete a recipe
    static deleteRecipe(request, response) {
        Recipes.pop(request.params.recipeId);
        response.status(200).send({
            message: 'Recipe was deleted successfully'
        })
    }

    //4 API route handler that allows a user to get all recipe
    static getAllRecipes(request, response) {
        response.status(200).send(Recipes);
    }

    //5 API route handler that allows a user post a review for recipe
    static postAReview(request, response) {
        const _recipeId = request.params.recipeId;
        let reviewId = (Recipes.length <= 0 ? 0 : Recipes.length);
        const reviewObject = {
            id: reviewId,
            recipeId: _recipeId,
            review: request.body.review
        }

        Review.push(reviewObject);
        response.status(200).send({
            message: "Review was Added successfully"
        });
    }

    //6 API route handler that allows a user to get just recipes with the most upvotes
    static descOrderUpVote(request, response) {
        if (request.query.sort === "upVotes" && request.query.order === "des") {
            Recipes.sort((Recipes2, Recipes1) => (Recipes2.upVotes - Recipes1.upVotes));
        }
        response.status(200).send(Recipes);
    }

}

export default HandleRecipeRequest;