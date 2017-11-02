const voteObject = {
  recipeId: request.params.recipeId,
  userId: request.body.userId,
  upVote: null,
  downVote: null
};
Vote.findOne({
  where: {
    recipeId: request.params.recipeId,
    $and: [{ userId: request.body.userId }]
  }
}).then((vote) => {
  if (vote) {
    response.status(401).send({
      message: 'You have voted this recipe already.'
    });
    return null;
  }
  if (!vote) {
    Recipe.findOne({
      where: {
        recipeId: request.params.recipeId
      }
    }).then((recipe) => {
      if (request.query.votes === 'upVote') {
        recipe.upVoteCount += 1;
        voteObject.upVote = true;
      } else {
        recipe.downVoteCount += 1;
        voteObject.downVote = true;
      }
      Recipe.update(recipe, {
        where: {
          recipeId: request.params.recipeId
        }
      });
      Vote.create(voteObject).then((createVote) => {
        return response.status(200).send({
          message: `You have ${( request.query.votes === 'upVote' ? 'up voted' : 'down voted')} a Recipe.`,
          Details: createVote
        });
      });
    });
  }
}).catch(error => response.status(400).send({
  message: 'Encountered error while trying to up vote or down vote a recipe.',
  Error: error
}));
//
//  ends upVote
//










///000000000000000000000000000000000000000000000000000000000000000


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
    }).then(nestedRecipe => Favorite.create({
      recipeId: request.params.recipeId,
      userid: request.body.userId
    }).then(() => response.status(200).send({
      message: 'You favorited this recipe.',
      Detail: nestedRecipe
    })).catch(error => response.status(400).send({
      message: 'Encountered error while trying to add favorite a recipe.',
      Error: error
    }))).catch(error => response.status(400).send({
      fatal: 'An error occured while trying to modify recipe information.',
      Error: error
    }));
  }
}).catch(error => response.status(400).send({
  message: 'Encountered error while trying to favorite a recipe.',
  Error: error
}));
//
//     ends favorite recipe





if (request.query.votes === 'upVote' || request.query.votes === 'downVote') {
  
} else if (request.query.votes === 'favorite') {
  
}
//