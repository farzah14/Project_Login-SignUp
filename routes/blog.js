const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
	res.render("index", {
		message: "Welcome To Farzah Blogspot",
	});
});

module.exports = route;
