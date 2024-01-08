const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Thread = require("./models/Thread");

const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("db contected"))
  .catch((err) => console.log(err));

//get
app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

//post
app.post("api/v1/thread", async (req, res) => {
  try {
    const createThread = await Thread.create({ req });
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, console.log("server running!"));
