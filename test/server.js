const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('./api.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use(router)
// Add custom routes before JSON Server router
server.post('/api/token', (req, res) => {
  res.json('random-token-for-test')
})
server.listen(3013, () => {
  console.log('JSON Server is running')
})