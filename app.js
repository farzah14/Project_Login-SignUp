const express = require("express");
const app = express();
const port = 8080;
const route = require("./routes/blog");
const path = require("path");
const rootPath = require("./utils/rootPath");
const sass = require("node-sass-middleware");

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

app.use("/blog", route);

app.use((req, res) => {
	res.send("Not Found");
});

app.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});
