const express = require("express");
const tweetsRouter = require("./routes/tweets");
const helloRouter = require("./routes/hello");

const app = express();
app.use(express.json());

app.use("/tweets", tweetsRouter);
app.use("/hello", helloRouter);

module.exports = app;
