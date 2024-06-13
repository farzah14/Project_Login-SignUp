const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/rootPath");

module.exports = class getData {
	constructor(data) {
		this.data = data;
	}

	saveData() {
		const pathData = path.join(rootDir, "data", "dataSignUp.json");
		fs.readFile(pathData, "utf-8", (err, value) => {
			let resultData = [];
			if (err) {
				console.log("err");
			} else {
				resultData = JSON.parse(value);
				resultData.push(this);
			}
			fs.writeFile(pathData, JSON.stringify(resultData), (err) => {
				console.log(err);
			});
		});
	}
};
