const express = require("express");
const route = express.Router();
const signUpControllers = require("../controllers/signUp");
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));
route.get("/", signUpControllers.getSignUp);
route.post("/", signUpControllers.postSignUp);

module.exports = route;
