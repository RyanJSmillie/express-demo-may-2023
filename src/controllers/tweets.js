exports.postTweets = (req, res) => {
  const body = req.body.Tweet;

  res.status(201).send({ message: "Tweet sent", Tweet: body });
};

exports.getTweet = (_, res) => {
  res.sendStatus(200);
};
