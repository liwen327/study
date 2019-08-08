var fs = require("fs")


var events = require('events');

var eventEmiter = new events.EventEmitter();

eventEmiter.on('to_parent', function () {
  console.log("接收到了广播！！")
})


setTimeout(function () {
  console.log('开始广播')
  eventEmiter.emit("to_parent")
}, 1000)