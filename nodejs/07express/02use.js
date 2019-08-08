var express = require("express");
var app = express()


//simple logger
app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url);
  res.send('根路径')
  // next();
})

app.use(function (req, res, next) {
  res.send('hello world111'); //会在页面中打印出hello world
})

app.listen(2000)