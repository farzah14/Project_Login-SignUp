const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
	res.render("main", {
		message: "Welcome To Farzah Blogspot",
	});
});

module.exports = route;
