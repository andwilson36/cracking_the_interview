const router = require("express").Router();
const fs = require("fs")

// GET /api/technical
router.post("/technical", async (req, res) => {
	fs.readFile(__dirname + "/../private/technical.json", (err, data) => {
		if (err) throw err;
		let questions = JSON.parse(data);
		console.log(questions);
	});
});

module.exports = router;
