'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable*/

var port = parseInt(process.env.PORT, 10) || 8080;
_app2.default.set('port', port);

var server = _http2.default.createServer(_app2.default);
server.listen(port, function () {
    console.log('server is listening on port ' + port);
});