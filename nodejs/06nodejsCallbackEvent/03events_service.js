//引入http模块
var http = require('http');
//fs模块
var fs = require('fs');
//path模块
var path = require('path'); /*nodejs自带的模块*/
//url模块
var url = require('url');

var events = require("events")

var eventEmitter = new events.EventEmitter()


var getMime = require('./module/getMimeFromFile.js')
// console.log('getMime:', getMime.getMime())

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  //获取文件的后缀名
  var extname = path.extname(pathname);
  console.log('pathname:==', pathname)
  if (pathname == '/') {
    pathname = '/index.html'
  }
  if (pathname != '/favicon.ico') {
    fs.readFile('static/' + pathname, function (err, data) {
      if (err) {
        //没有这个文件
        console.log(404)
        fs.readFile('static/404.html', function (error, data404) {
          if (error) {
            console.log(error);
          }
          res.writeHead(404, {
            "Content-Type": "text/html;charset='utf-8'"
          });
          // res.write(data404);
          res.end(data404); /*结束响应*/
        })
      } else {
        //有这个文件
        console.log('请求成功')
        var mime = getMime.getMime(fs, eventEmitter, extname)
        console.log('mime:', mime)
        eventEmitter.on('get_mime', function (mime) {
          res.writeHead(200, {
            "Content-Type": "" + mime + ";charset='utf-8'"
          });
          res.end(data); /*结束响应*/
        })


      }

    })
  }

}).listen(8001)