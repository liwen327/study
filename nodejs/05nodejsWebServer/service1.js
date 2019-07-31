//引入http模块
var http = require('http');

//fs模块
var fs = require('fs');

//path模块
var path = require('path'); /*nodejs自带的模块*/

//url模块
var url = require('url');
var getMime = require('./module/getmime.js')

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  var extName = path.extname(pathname)
  if (pathname == '/') {
    pathname = '/index.html'
    console.log('index')
  }
  // console.log(pathname)
  if (pathname != '/favicon.ico') {
    // console.log('pathname:', pathname)
    fs.readFile(pathname, function (err, data) {
      if (err) {
        //没有这个文件
        console.log(404)
        fs.readFile('./404.html', function (error, data404) {
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
        var mime = getMime.getMime(extName)
        console.log('mime:', mime)
        res.writeHead(200, {
          "Content-Type": "" + mime + ";charset='utf-8'"
        });
        res.write(data);
        res.end(); /*结束响应*/

      }

    })
  }
  res.end()
}).listen(3000)