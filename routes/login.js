const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
const loginControllers = require("../controllers/login");

route.use(bodyParser.urlencoded({ extended: true }));

route.get("/", loginControllers.getLogin);

module.exports = route;
