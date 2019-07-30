/* var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1> Hollo Node.js  ! </h1>');
    res.end('<p>Hello World</p>');
}).listen(4000); */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    });
    res.write("这是node.js http");
    res.end('哈哈哈，结束吧11111');
}).listen(4000)
console.log("HTTP server is listening at port 4000.");