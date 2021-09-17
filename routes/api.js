const router = require("express").Router();
const fs = require("fs")

// GET /api/technical
router.get("/technical", async (req, res) => {
	try {
		let questions
		fs.readFile(__dirname + "/../private/technical.json", (err, data) => {
			if (err) throw err;
			questions = JSON.parse(data);
			res.send(questions)
			console.log(questions)
		});
	}
	catch(err) {
		res.send(err)
	}

});

module.exports = router;
