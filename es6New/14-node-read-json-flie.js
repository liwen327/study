const fs = require('fs')
fs.readFile('14-nodeJson.json', (err, data) => {
  if (err) console.log(err);
  const test1 = JSON.parse(data);
  console.log('test1: ', test1);


})