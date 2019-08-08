var fs = require('fs')

function getFile(callback) {
  fs.readFile('mime.json', function (err, data) {
    // console.log(data.toString())
    callback(data)
  })
}

getFile(function (result) {
  console.log(result.toString())
})