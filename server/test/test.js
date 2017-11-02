import request from 'supertest';
import { expect } from 'chai';
import app from '../app';
import HandleRecipeRequest from '../server/controllers/recipe';
import HandleUserRequest from '../server/controllers/user';
import Recipes from './recipe';

describe('Testing API endpoint', () => {
  describe('Handling valid cases', () => {
    it('List all Recipes', (done) => {
      request(app)
        .get('/api/v1/recipes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('array');
          expect(response.body).to.deep.equal(Recipes);
          done();
        });
    });

    it('Add Recipe', (done) => {
      const recipe = {
        userId: 1,
        name: 'Yes',
        origin: 'Nigeria',
        description: 'Fried rice is eaten in most part of nigeria.',
        ingredients: 'Rice, meat',
        instructions: '1. Boil your meat, 2. Add a fish',
        favorite: false,
        upVoteCount: 0,
        downVoteCount: 0,
      };
      request(app)
        .post('/api/v1/recipes')
        .send(recipe)
        .expect(200)
        .end((request, response) => {
          expect(response.body).to.be.a('object');
          expect(response.body.message).to.equal('Recipe was added successfully');
          done();
        });
    });

    it('POST a review successful', (done) => {
      const review = {
        recipeId: 1,
        userId: 1,
        comment: "This is a comment"
      };
      request(app)
        .post('/api/v1/recipes/1/reviews')
        .send(review)
        .expect(200)
        .end((request, response) => {
          expect(response.body).to.be.a('object');
          expect(response.body.message).to.equal('Review was added to Recipe successfully');
          done();
        });
    });

    // /api/recipes/t/reviews
    it('POST a review fail', (done) => {
      const review = {
        recipeId: 1,
        userId: 1,
        comment: "This is another comment"
      };
      request(app)
        .post('/api/v1/recipes/t/reviews')
        .send(review)
        .expect(401)
        .end((request, response) => {
          expect(response.body.message).to.equal('Invalid Recipe Id: Id must be a number');
          done();
        });
    });

    // ////////////////////////////////////////
    // chai.request(server)
    //     .delete('/book/' + book.id)
    //     .end((err, res) => {
    //         res.should.have.status(200);
    //         res.body.should.be.a('object');
    //         res.body.should.have.property('message').eql('Book successfully deleted!');
    //         res.body.result.should.have.property('ok').eql(1);
    //         res.body.result.should.have.property('n').eql(1);
    //         done();
    //     });

    // ////////////////////////////////////
    it('Delete a recipe', (done) => {
      request(app)
        .delete('/api/v1/recipes/:recipeId')
        .end((request, response) => {
          // expect(response.body).to.be.a('array');
          expect(response.body.message).to.equal('Recipe was deleted successfully');
          done();
        });
    });
  });
});
