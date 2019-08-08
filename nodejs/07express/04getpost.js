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
<<<<<<< HEAD
  res.render('form')
=======
  res.render('./form.ejs')
>>>>>>> 24d5c041e98742bf3a762479e9e9775ef8a94be0
  next()
})

app.post('/', function (req, res) {

  /* res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2)) */
<<<<<<< HEAD
  res.render('form.ejs')
  console.log(req.body)
})

app.listen(4000)
=======
  res.render('./form.ejs')
  console.log(req.body)
})

app.listen(2000)
>>>>>>> 24d5c041e98742bf3a762479e9e9775ef8a94be0
