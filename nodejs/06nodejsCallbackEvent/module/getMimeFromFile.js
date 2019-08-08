exports.getMime = function (fs, eventEmitter, extname) {
  fs.readFile('./mime.json', function (err, data) {
    if (err) {
      console.log('mime.json文件不存在');
      return false;
    }
    var miMes = JSON.parse(data.toString())
    console.log('mimes:==', miMes)
    var result = miMes[extname] || 'text/html'
    eventEmitter.emit('get_mime', result)
  })

}