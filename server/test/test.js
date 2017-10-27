/*eslint-disable*/

import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';
import HandleRecipeResquest from '../server/controllers/recipe';
import Recipes from '../server/models/recipe';

describe('Testing API endpoint', () => {
    describe('Handling valid cases', () => {
        it("List all Recipes", (done) => {
            request(app)
                .get('/api/recipes')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                    expect(response.body).to.be.a('array');
                    expect(response.body).to.deep.equal(Recipes);
                    done();
                });
        });

        it("GET all recipes", (done) => {
            let recipe = {
                id: 0,
                name: 'Fried Rice',
                origin: 'Nigeria',
                description: 'Fried rice is a nigeria delicacy',
                ingredients: 'rice',
                instructions: 'boil your rice',
                upVotes: 8,
                downVotes: 2
            }
            request(app)
                .post('/api/recipes')
                .send(recipe)
                .expect(200)
                .end((request, response) => {
                    expect(response.body).to.be.a('object');
                    expect(response.body.message).to.equal("Recipe was created");
                    done();
                });
        });

        it("POST a review successful", (done) => {
            let review = {
                id: 0,
                recipeId: 0,
                review: 'Sweet reviews'
            }
            request(app)
                .post('/api/recipes/0/reviews')
                .send(review)
                .expect(200)
                .end((request, response) => {
                    expect(response.body).to.be.a('object');
                    expect(response.body.message).to.equal("Review was Added successfully");
                    done();
                });
        });

        ///api/recipes/8/reviews
        it("POST a review fail", (done) => {
            let review = {
                id: 0,
                recipeId: 0,
                review: 'Sweet reviews'
            }
            request(app)
                .post('/api/recipes/8/reviews')
                .send(review)
                .expect(401)
                .end((request, response) => {
                    expect(response.body.message).to.equal("8 is not a valid ID");
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

        //////////////////////////////////////
        it("Delete a recipe", (done) => {
            request(app)
                .delete('/api/recipes/0')
                .end((request, response) => {
                    //expect(response.body).to.be.a('array');
                    expect(response.body.message).to.equal("Recipe was deleted successfully");
                    done();
                });
        });


    });
});