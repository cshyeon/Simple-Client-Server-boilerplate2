const { HttpServer } = require('./src');
const { webhookRouter } = require('./src/router');

HttpServer.onRouter('/test', 'GET', webhookRouter);
HttpServer.on();
