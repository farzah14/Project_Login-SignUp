const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/rootPath");

module.exports = class GetData {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	saveData() {
		const pathData = path.join(rootDir, "data", "dataSignUp.json");

		// check whether the JSON file exists or not
		if (!fs.existsSync(pathData)) {
			fs.writeFileSync(pathData, JSON.stringify([]));
		}

		fs.promises
			.readFile(pathData, "utf-8")
			.then((value) => {
				let resultData = JSON.parse(value);
				if (this.email[0] === this.email[1]) {
					if (this.password[0] === this.password[1]) {
						resultData.push({
							email: this.email[1],
							password: this.password[1],
						});
						return fs.promises.writeFile(
							pathData,
							JSON.stringify(resultData),
							(err) => {
								if (err) {
									console.log("Cannot write new data");
								}
							}
						);
					} else {
						console.log("Please input same password");
					}
				} else {
					console.log("Please input same email");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
