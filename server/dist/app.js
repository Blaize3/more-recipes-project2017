'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  set up the express app
/* eslint-disable*/

var app = (0, _express2.default)();

// log requests to the console
app.use((0, _morgan2.default)('dev'));

// parser incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parser ...
app.use((0, _cookieParser2.default)());

// Setup a default catch all route that sends back a welcome message in JSON format
app.get('*', function (request, response) {
    return response.status(200).send({
        message: 'Welcome to more-recipes...'
    });
});

exports.default = app;