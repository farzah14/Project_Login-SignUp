exports.getLogin = (req, res) => {
	res.render("login", {
		message: "Login",
	});
};
