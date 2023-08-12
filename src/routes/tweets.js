const express = require("express");

const tweetController = require("../controllers/tweets");

const tweetsRouter = express.Router();

tweetsRouter.post("/", tweetController.postTweets);
tweetsRouter.get("/", tweetController.getTweet)

module.exports = tweetsRouter;
