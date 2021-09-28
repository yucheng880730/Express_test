var express = require("express");
var debug = require("debug")("http");
var test = require("../modules/test"); // 引入模組

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  debug("Listening");
  res.render("index", { title: test.multi(5, 6) }); // 呼叫模組
});

module.exports = router;
