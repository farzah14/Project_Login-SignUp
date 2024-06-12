const express = require("express");
const route = express.Router();
const signUpControllers = require("../controllers/signUp");

route.get("/", signUpControllers.getSignUp);

module.exports = route;
