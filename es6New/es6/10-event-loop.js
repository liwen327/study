/* //外部队列、内部队列执行顺序
console.log('1 script start');

setTimeout(function () {
  console.log('2 setTimeout');
}, 0)

Promise.resolve(function () {
  console.log('3 promise1');
}).then(function () {
  console.log('4 promise2');
})

console.log('5 script end');
// 1 5 3 4 2 */

//简单的node端与浏览器端的差别：
/* setTimeout(function () {
  console.log('1 setTimeout1');
  Promise.resolve().then(function () {
    console.log('2 promise1');
  })
})
setTimeout(function () {
  console.log('3 setTimeout2');
  Promise.resolve().then(function () {
    console.log('4 promise2');
  })
}) */
//浏览器中的执行结果： 1 2 3 4
// 首先这段代码没有内部队列，有两个外部队列，两个外部队列中有内部队列。所以先执行第一个外部队列（打印1），第一个外部
//队列执行完后，再执行第一个外部队列的内部队列（打印2），然后再执行第2个外部队列（打印3 ），第2个外部队列中又在内部
//队列（打印4）

// node.js中的执行结果：
// 1 setTimeout1
// 3 setTimeout2
// 2 promise1
// 4 promise2



// node端与浏览器端的事件循环区别：
// 第一次执行结果：1 2 3 4 5 6 7 8
//第二次或多执行几次结果每次都不相同：因为setImmediate存在精度问题，它是node特有的。浏览器端没有setImmediate
/* setTimeout(function () {
  console.log('1 setTimeout1');
  Promise.resolve().then(function () {
    console.log('2 promise1');
  })
})

setTimeout(function () {
  console.log('3 setTimeout2');
  Promise.resolve().then(function () {
    console.log('4 promise2');
  })
})

setImmediate(function () {
  console.log('5 setImmediate1');
  Promise.resolve().then(function () {
    console.log('6 promise3');
  })
})
setImmediate(function () {
  console.log('7 setImmediate2');
  Promise.resolve().then(function () {
    console.log('8 promise4');
  })
}) */

//调换setTimeout与setImmediate的顺序：
//第一次执行时的结果： 1 2 3 4 7 8 5 6
//再执行几次每次结果也都不一样。还是因为精度的问题？？？
/* setTimeout(function () {
  console.log('1 setTimeout1');
  Promise.resolve().then(function () {
    console.log('2 promise1');
  })
})

setImmediate(function () {
  console.log('3 setImmediate1');
  Promise.resolve().then(function () {
    console.log('4 promise3');
  })
})

setTimeout(function () {
  console.log('5 setTimeout2');
  Promise.resolve().then(function () {
    console.log('6 promise2');
  })
})

setImmediate(function () {
  console.log('7 setImmediate2');
  Promise.resolve().then(function () {
    console.log('8 promise4');
  })
}) */

//setImmediate和setTimeout fs.readdir
const fs = require('fs');

setImmediate(function () {
  console.log('1 setImmediate');
})

fs.readdir(__dirname, () => {
  console.log('2 fs.readdir');
})

setTimeout(function () {
  console.log('3 setTimeout');
})

Promise.resolve().then(function () {
  console.log('4 promise');
})
// 执行结果：
// 4 promise
// 3 setTimeout
// 2 fs.readdir
// 1 setImmediate









