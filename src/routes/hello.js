const express = require("express");

const helloController = require("../controllers/hello");

const helloRouter = express.Router();

helloRouter.get('/', helloController.getHello);
helloRouter.get("/:name", helloController.getName);

module.exports = helloRouter