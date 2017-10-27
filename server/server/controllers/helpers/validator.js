/*eslint-disable*/

import Recipes from '../../models/recipe';

class RecipeIdValidator {
    static validateId(request, response, next) {
        let isPresentID = null;
        Recipes.forEach(function(recipe) {
            if (recipe.id == request.params.recipeId) {
                isPresentID = true;
            }
        });
        if (isPresentID) {
            next();
        } else {
            response.status(401).send({
                message: request.params.recipeId + " is not a valid ID"
            });
        }
    }
}

export default RecipeIdValidator;