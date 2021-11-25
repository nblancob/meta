const express = require("express");
const app = express();
const port = process.env.port || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URL } = process.env;

//Database
mongoose
  .connect(DB_URL)
  .then((db) => console.log("DB is connected"))
  .catch("error");

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${port}/api`)
);
