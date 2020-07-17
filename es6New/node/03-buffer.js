// import { SlowBuffer } from "buffer";
// const SlowBuffer = require('buffer')

var buf = new Buffer.alloc(100);
console.log('buf length: ', buf.length);  //100

console.log('buf[10]: ', buf[10]);  //0
buf[20] = -100
console.log(buf[20]);   //156

buf[21] = 300;
console.log('====================================');
console.log(buf[21]);  //44
console.log('====================================');

buf[22] = 3.1415926;
console.log(buf[22]);  //3





var pool;
function allocPool() {
  pool = new Buffer.alloc(Buffer.poolSize);
  pool.used = 0;
}

new Buffer.alloc(1024);
if (!pool || pool.length - pool.used < this.length) allocPool()