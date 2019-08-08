var express = require("express");
var app = express()


//静态服务
app.use('/static', express.static('./public')); //http://127.0.0.1:4000/static/  可以显示出来index.html的页面

app.use(express.static('./public')); //http://127.0.0.1:4000/  显示出来的是‘哈哈’  不知道为什么，不是说输入http://127.0.0.1:4000/就会直接去public文件中找index.html了吗？怎么还会再匹配下一个路由


app.get('/', function (req, res) {
  res.send("哈哈")
})

app.listen(4000)