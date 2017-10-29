/* eslint-disable */

const userController = require('../controllers').User;

const isAuthenticated = require('../controllers/helpers/user');

module.exports = (app) => {
    /*          0000000000000000000000000000000000000000000000000000000000000000000000000
                000                                                                   000
                000                ALL POST ROUTES WILL LISTED BELOW                  000
                000                                                                   000
                0000000000000000000000000000000000000000000000000000000000000000000000000            */
    ///
    ///         API routes for users to create accounts 
    ///
    ///          POST:/api/users/signup
    app.post('/api/users/signup', userController.signup);

    ///
    ///         API routes for users to login into their account
    ///
    ///          POST:/api/users/signin
    app.post('/api/users/signin', userController.signin);

    // ///
    // ///         API routes that allow a user to add a new book 
    // ///
    // ///          POST:/api/books
    // app.post('/api/addbook', bookController.addABook);

    // ///
    // ///         API routes that allow user to borrow a book 
    // ///
    // ///          POST:/api/users/:userId/books
    // app.post('/api/users/:userId/borrowbook', isAuthenticated.authentcatedUser, borrowController.borrowABook);

    // /*          0000000000000000000000000000000000000000000000000000000000000000000000000
    //             000                                                                   000
    //             000                ALL GET ROUTES WILL LISTED BELOW                   000
    //             000                                                                   000
    //             0000000000000000000000000000000000000000000000000000000000000000000000000            */
    // ///
    // ///         API routes that allow a user to get all the books in the library
    // ///
    // ///          GET:/api/books
    // app.get('/api/getallbooks', bookController.getAllBooks);

    // ///
    // ///         API routes that allow users to get all the books that the user has borrowed but has not              returned 
    // ///
    // ///          POST:/api/users/:userId/books?returned=false
    // app.get('/api/users/:userId/getBooks', isAuthenticated.authentcatedUser, borrowController.yetToBeReturnedBorrowedBooks);


    // /*          0000000000000000000000000000000000000000000000000000000000000000000000000
    //             000                                                                   000
    //             000                ALL PUT ROUTES WILL LISTED BELOW                   000
    //             000                                                                   000
    //             0000000000000000000000000000000000000000000000000000000000000000000000000            */
    // ///
    // ///         API routes that allow a users to modify a book information
    // ///
    // ///          PUT:/api/books
    // app.put('/api/modifybookinformation', bookController.modifyBookInformation);

    // ///
    // ///         API routes that allow users to return a book 
    // ///
    // ///          PUT:/api/users/:userId/books
    // app.put('/api/users/:userId/returnborrowedbook', isAuthenticated.authentcatedUser, borrowController.returnBorrowedBook);



}; // closes module.exports Object