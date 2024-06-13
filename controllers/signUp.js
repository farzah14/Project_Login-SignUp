const signUpModels = require("../models/signUp");

exports.getSignUp = (req, res) => {
	res.render("signUp", {
		message: "Sign Up",
	});
};

exports.postSignUp = (req, res) => {
  const newSignUp = new signUpModels(req.body.result);
	newSignUp.saveData();
	res.redirect("/signUp");
};
