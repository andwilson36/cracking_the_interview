const express = require("express");
const morgan = require('morgan');

const PORT = process.env.PORT || 3001

const app = express();

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
