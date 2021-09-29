var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var myRouter = require("./routes/myroute");

// 開始建立express模組，並命名為app變數
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

// 透過app.set設定樣板引擎為jade
app.set("view engine", "jade");

app.use(logger("dev"));

// 讓POST可以解析json資料格式
app.use(express.json());

// 讓POST可以解析urlencoded資料格式
app.use(express.urlencoded({ extended: false }));

// 用以處理並分析網頁中站存的cookie資料
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/my", myRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
