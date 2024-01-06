const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3000;

app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("db contected"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log("server running!"));
