var express = require("express")
var app = new express()

app.get("/newscontent", function (req, res) {
  console.log(req.params)
  res.send("你好，express" + req.params)
})

app.listen(3000, "127.0.0.1")