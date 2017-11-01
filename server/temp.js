Favorite.findOne({
  where: {
    recipeId: request.params.recipeId,
    $and: [{ userId: request.body.userId }]
  }
}).then((favorite) => {
  if (favorite) {
    response.status(401).send({
      message: 'You have favorited this recipe already.'
    });
    return null;
  }
  if (!favorite) {
    updateObject.favorite = true;
    Recipe.update(updateObject, {
      where: {
        id: request.params.recipeId
      }
    }).then((nestedRecipe) => {
      Favorite.create({
        recipeId: request.params.recipeId,
        userid: request.body.userId
      }).then(() => {
        response.status(200).send({
          message: 'You favorited this recipe.',
          Detail: nestedRecipe
        });
      }).catch(error => response.status(400).send({
        message: 'Encountered error while trying to add favorite a recipe.',
        Error: error
      }));
    }).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to modify recipe information.',
      Error: error
    }));
  } else {
    response.status(200).send({
      message: 'You have favorited this recipe already.',
      Detail: recipe
    });
  }
}).catch(error => response.status(400).send({
  message: 'Encountered error while trying to favorite a recipe.',
  Error: error
}));