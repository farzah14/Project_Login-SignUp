const express = require("express");
const route = express.Router();
const mainControllers = require("../controllers/main");

route.get("/", mainControllers.getMain);

module.exports = route;
