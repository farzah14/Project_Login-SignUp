const jsonData = require("../data/dataSignUp.json");

exports.getLogin = (req, res) => {
	res.render("login", {
		message: "Login",
	});
};

exports.checkLogin = (req, res) => {
	const { email, password } = req.body;
	const data = jsonData;

	const user = data.find(
		(user) => user.email === email && user.password === password
	);

	if (user) {
		res.render("sucessLogin", {
			message: "Login",
			messageLogin: "Login Successfull",
		});
	} else {
		res.render("sucessLogin", {
			message: "Login",
			messageLogin: "Login Failed",
		});
	}
};
