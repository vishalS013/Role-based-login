const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Configure CORS
server.use(cors({
  origin: 'http://localhost:3000', // React app URL
  credentials: true
}));

// Use default middlewares (logger, static, etc.)
server.use(middlewares);

// Use JSON Server router
server.use(jsonServer.bodyParser);
server.use(router);

// Start the server
server.listen(3500, () => {
  console.log('JSON Server is running on http://localhost:3500');
});
