const SignUpModel = require("../models/signUp");

exports.getSignUp = (req, res) => {
	res.render("signUp", {
		message: "Sign Up",
	});
};

exports.postSignUp = (req, res) => {
	const newSignUp = new SignUpModel(req.body.email, req.body.password);
	newSignUp.saveData();
	res.redirect("/signUp");
};
