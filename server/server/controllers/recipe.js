const Recipe = require('../models').Recipe;

module.exports = {
    addRecipe(request, response) {
        return Recipe.create({
            userId: request.body.userId,
            name: request.body.name,
            origin: request.body.origin,
            description: request.body.description,
            ingredints: request.body.ingredints,
            instructions: request.body.instructions,
            upVote: request.body.upVote,
            downVote: request.body.downVote
        }).then((recipe) => {
            response.status(200).send({
                message: "Recipe was added successfully",
                Details: recipe
            });
        }).catch((error) => response.status().send({
            fatal: "An error occured while trying to create a recipe.",
            Error: error
        }));
    },
}