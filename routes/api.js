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
		});
	}
	catch (err) {
		res.send(err)
	}
});

// POST /api/technical
router.post("/technical", (req, res) => {
	let newQuestion = JSON.parse(req.body.body)
	if (newQuestion.question.trim() === '' || newQuestion.answer.trim() === '') {
		res.status(400).send("Question or Answer is empty");
	}
	let questions = {}

	try {
		fs.readFile(__dirname + "/../private/technical.json", (err, data) => {
			if (err) throw err;
			questions = JSON.parse(data);

			//if language does not exist create that key
			if (!questions[newQuestion.language]) questions[newQuestion.language] = {};
			//if difficulty doesn not exist create that array
			if (!questions[newQuestion.language][newQuestion.difficulty]) questions[newQuestion.language][newQuestion.difficulty] = [];

			//add new question to the question object-
			questions[newQuestion.language][newQuestion.difficulty].push({
				question: newQuestion.question.trim(),
				answer: newQuestion.answer.trim()
			})
			res.status(200).send(questions)

			// write new questions into file
			fs.writeFile(__dirname + "/../private/technical.json", JSON.stringify(questions), (err) => {
				if (err) {
					conosle.log(err)
				}
			})
		})
	}
	catch (err) {
		res.status(500).send(err)
	}
});

// GET /api/behavioral
router.get("/behavioral", async (req, res) => {
	try {
		let questions
		fs.readFile(__dirname + "/../private/behavioral.json", (err, data) => {
			if (err) throw err;
			questions = JSON.parse(data);
			res.send(questions)
		});
	}
	catch (err) {
		res.send(err)
	}
});

// POST /api/behavioral
router.post("/behavioral", (req, res) => {
	let newQuestion = JSON.parse(req.body.body)
	if (newQuestion.question.trim() === '' || newQuestion.answer.trim() === '') {
		res.status(400).send("Question or Answer is empty");
	}
	let questions = {}

	try {
		fs.readFile(__dirname + "/../private/behavioral.json", (err, data) => {
			if (err) throw err;
			questions = JSON.parse(data);

			//if language does not exist create that key
			if (!questions[newQuestion.language]) questions[newQuestion.language] = {};
			//if difficulty doesn not exist create that array
			if (!questions[newQuestion.language][newQuestion.difficulty]) questions[newQuestion.language][newQuestion.difficulty] = [];

			//add new question to the question object-
			questions[newQuestion.language][newQuestion.difficulty].push({
				question: newQuestion.question.trim(),
				answer: newQuestion.answer.trim()
			})
			res.status(200).send(questions)

			// write new questions into file
			fs.writeFile(__dirname + "/../private/behavioral.json", JSON.stringify(questions), (err) => {
				if (err) {
					conosle.log(err)
				}
			})
		})
	}
	catch (err) {
		res.status(500).send(err)
	}
});

module.exports = router;
