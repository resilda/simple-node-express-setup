var express = require("express");

var app = express();

const module1 = app.get("/text", function createApi(req, res) {
  res.send("hey");
});

module.exports = module1;
