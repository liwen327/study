var express = require("express");
var app = express();

//解决办法1，交换位置
/* app.get('/admin/login', function (req, res) {

  res.send('这是管理员登录页面')
})
app.get('/:username/:id', function (req, res) {
  var username = req.params.username
  var id = req.params.id
  res.send('username:' + username)
}) */

//解决办法2：使用next()
app.get('/:username/:id', function (req, res, next) {
  var username = req.params.username
  if (username) {

    var id = req.params.id
    res.send('username:' + username)
  } else {
    next() //如果username不存在，就往下执行，匹配下一个路由
  }
})
app.get('/admin/login', function (req, res) {

  res.send('这是管理员登录页面')
})

app.listen(2000, '127.0.0.1')