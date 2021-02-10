const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

require("./models");

const app = express();

app.use(logger("dev"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( require("./routes/apiRoutes"));

app.use(require("./routes/htmlRoutes"));

app.use(express.static("public"));

















app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });