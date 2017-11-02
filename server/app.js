import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './server/routes/index';

//  set up the express app
const app = express();

// log requests to the console
app.use(logger('dev'));

// parser incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parser ...
app.use(cookieParser());

// importing routes from the route folder
router(app);

// Setup a default catch all route that sends back a welcome message in JSON format
app.get('*', (request, response) => response.status(200).send({
  message: 'Welcome to more-recipes...'
}));

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

export default app;
