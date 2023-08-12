exports.getHello = (req, res) => {
  res.sendStatus(200);
};

exports.getName = (req, res) => {
  const { name } = req.params;
  const { age, surname } = req.query;

  res.status(200).send({ message: `Hello ${name} ${surname}, who is ${age} years old! ` });
};
