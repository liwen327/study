/**
1、npm install mongodb --save-dev   
2、var MongoClient = require('mongodb').MongoClient;
 
var DBurl= 'mongodb://localhost:27017/test'     //连接数据库的地址

3、连接数据库
MongoClient.connect(DBurl,function(err,db){
console.log(db)
})
4、实现增删改查
MongoClient.connect(DBurl,function(err,db){
  //向user这个表中增加一条数据，data表示增加成功的数据
  db.collection('user').insertOne({'name':'zhangsan'},function(error,data){
  console.log(data)
})
})
 */

var url = require('url')
var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://localhost:27017/test' //连接数据库的地址x

app.get('/add', function (req, res) {

  console.log('req', req)
  res.send('add:')
  MongoClient.connect(DBurl, function (err, db) {
    if (err) {
      console.log(err)
      console.log('连接数据库失败')
      return
    }
    console.log("db:==", db)
    db.inventory('user').insertOne({
      "name": "wangwu",
      "age": 30
    }, function (error, data) {
      if (error) {
        console.log('插入数据失败')
        return;
      }
      console.log("插入数据成功")
      db.close()
    })
  })
})

app.listen(5000, '127.0.0.1')