const express = require("express");
const app = express();
const port = 8080;
const routeMain = require("./routes/main");
const path = require("path");
const rootPath = require("./utils/rootPath");
const sass = require("node-sass-middleware");
const routeLogin = require("./routes/login");
const routeSignUp = require("./routes/signUp");

app.use(
	sass({
		src: path.join(__dirname, "/sass"),
		dest: path.join(__dirname, "public/css"),
		debug: true,
		outputStyle: "compressed",
		prefix: "/css",
	})
);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", routeMain);
app.use("/login", routeLogin);
app.use("/signUp", routeSignUp);

app.use((req, res) => {
	res.send("Not Found");
});

app.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});
