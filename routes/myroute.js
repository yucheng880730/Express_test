// 引入express模組
var express = require("express");
// 透過Router()方法新增一個路由器
var router = express.Router();

// router.get()傳入兩個參數
// 第一個字串表示路徑
// 第二個則是回調函數
router.get("/", function (req, res) {
  // function code
});

router.post("/", function (req, res) {
  // function code
});

router.get("/hello", function (req, res) {
  res.send("Hello Node.js");
});

// use postman to test
router.post("/sum", function (req, res) {
  var n1 = parseInt(req.body.num1);
  var n2 = parseInt(req.body.num2);
  var sum = n1 + n2;
  // 加總並以json格式回覆
  res.json({ mySum: sum });
});

router.get("/sum", function (req, res) {
  var n1 = parseInt(req.query.num1);
  var n2 = parseInt(req.query.num2);
  var sum = n1 + n2;
  res.json({ mySum: sum });
});

module.exports = router;
