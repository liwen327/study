var express = require("express");
var app = express()

var bodyParser = require("body-parser")
app.set('view engine', 'ejs') //老版本的引用方法
// app.engine('html', require('ejs').renderFile) //新版本的引用方法

app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
  console.log('getreq:--', req.query)
  res.render('./form.ejs')
  next()
})

app.post('/', function (req, res) {

  /* res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2)) */
  res.render('./form.ejs')
  console.log(req.body)
})

app.listen(2000)