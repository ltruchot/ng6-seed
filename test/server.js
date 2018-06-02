const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const port = 3333;
server.use(middlewares);

// Add custom atuh routes before JSON Server router
const token = 'fake-token';
server.post('/user', (req, res) => res.json(token));

server.post('/login', (req, res) => res.json(token));

server.get('/user', (req, res) => {
  if (req.get('Authorization') === 'Bearer ' + token) {
    res.json({
      login: 'fake user',
      email: 'fakeuser@fakedomain.fake',
      id: 123,
    });
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});
