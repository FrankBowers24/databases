var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  console.log("getting inside of routes.js "+route);
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

