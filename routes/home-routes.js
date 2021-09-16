const router = require("express").Router();
const path = require('path');

// GET home
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

// GET /technical questions
router.get("/technical-questions", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/views/technical-questions.html'));
});

// GET /404
router.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/views/404.html'));
});

module.exports = router;
