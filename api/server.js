const jsonServer = require('json-server');
const os = require('os');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "/db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server