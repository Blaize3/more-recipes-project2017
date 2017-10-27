/* eslint-disable*/

import http from 'http';
import app from '../src/app';

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is listening on port ' + port);
});