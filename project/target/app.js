"use strict";

var _routes = require("./routers/routes");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _config = require("./services/config");

var _config2 = _interopRequireDefault(_config);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("El Esteban es un bro chevere");

_mongoose2.default.connect("mongodb://" + _config2.default.urlmongodb + _config2.default.namedb, {
  useNewUrlParser: true
}).then(function (db) {
  return console.log("connect");
}).catch(function (err) {
  return console.log("No conecto " + err);
});

_routes.app.use(_routes.express.static(_path2.default.join(__dirname, "public")));

_routes.app.listen(_config2.default.port, function () {
  console.log(_config2.default.port);
});