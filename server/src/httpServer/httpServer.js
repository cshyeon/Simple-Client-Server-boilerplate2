const http = require('http');

const httpServer = http.createServer(serverListener);

function serverListener(req, res) {
  console.log('Receive Request!', req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Cache-Control, Pragma, Expires');

  req.pipe(res);
}

const PORT = 8000;

const HttpServer = {
  on() {
    httpServer.listen(PORT, () => {
      console.log(`Server is Running on ${PORT}`);
    });
  }
};

module.exports = {
  HttpServer,
};
