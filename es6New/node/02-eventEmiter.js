const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

//监听connect事件，注册回调函数
emitter.on('connect', (username) => {
  console.log(username + '已连接');

})
//触发connect事件，并且加上一个参数（即上面的username）
emitter.emit('connect', '一只图雀')






