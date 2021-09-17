const router = require("express").Router();
const fs = require("fs")

// GET /api/technical
router.post("/technical", async (req, res) => {
	try {
		let questions
		fs.readFile(__dirname + "/../private/technical.json", (err, data) => {
			if (err) throw err;
			res.send(JSON.parse(data))
		});
	}
	catch(err) {
		res.send(err)
	}

});

module.exports = router;
