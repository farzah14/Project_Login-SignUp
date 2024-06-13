const express = require("express");
const route = express.Router();
const signUpControllers = require("../controllers/signUp");

route.use(express.urlencoded({ extended: false }));

route.get("/", signUpControllers.getSignUp);
route.post("/", signUpControllers.postSignUp);

module.exports = route;
