const jsonServer = require('json-server');
const main = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

main.use(middlewares);
main.use(router);

main.listen(port);