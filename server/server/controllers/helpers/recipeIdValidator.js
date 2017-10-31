import { Recipe } from '../../models/recipe';

export default {
  validateRecipeId(request, response, next) {
    if (isNaN(request.params.recipeId)) {
      response.status(401).send({
        message: 'Invalid Recipe Id: Id must be a number'
      });
    } else {
      Recipe.findOne({
        where: {
          id: request.params.recipeId
        }
      }).then((recipe) => {
        if (!recipe) {
          response.status(401).send({
            message: 'Recipe Not Found!'
          });
          return null;
        }
        next();
      }).catch(error => response.status(400).send({
        message: 'Recipe validation helper encountered error while trying to validate a recipe.',
        Error: error
      }));
    }
  }
};
