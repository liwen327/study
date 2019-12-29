

/* //高德面试题：  2019.12.26 15:00
let a = { b: 1 }
console.log([a])     //[{b:1}]
console.log(...a)   //Uncaught TypeError: Found non-callable @@iterator at es6.js:197
console.log(...[a])   //{b:1} */






//类
/* class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}
let point = new Point(2, 3)
console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('y'))
console.log(point.hasOwnProperty('toString'))

let point1 = new Point(2, 3)
let point2 = new Point(3, 2)
console.log(point1._proto_ == point2._proto_)   //true */


/* //mvvm的双向数据绑定的原理
let obj = {}
Object.defineProperty(obj, 'hello', {
  get: function () {
    console.log('get方法被调用了！')
  },
  set: function (val) {
    console.log('set方法被调用了，参数是 ' + val)
  }
})
obj.hello   //get方法被调用了！
obj.hello = 'abc' //set方法被调用了，参数是 abc */


/* //let不能再对声明过的标识符重新声明，下面代码报错
var name = 'zhangsan'
let name = 'lisi'
console.log("name:", name) */

/* const person = {
  name: 'mike'
}
person.name = 'lily' ,
} */

//临时性死区







/* //promise
let promise = new Promise(function (resolve, reject) {
  // console.log('fullfilled!')
  resolve()
})
function timeout(ms, err) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, 'done')  //'done'这个参数是在ms后被当作参数传给resolve这个回调函数的  https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout
    reject(err)
  })
}
timeout(3000, 'error').then(function (value) {
  console.log('value:', value)
}).catch(err => {
  console.log('err:==', err)
}) */


/* function interval(ms) {

  return new Promise(function (resolve, reject) {
    setInterval(resolve, ms, '1000')
  })

}
interval(1000).then(function (value) {
  console.log('resolved:===', value)
}) */
/* let timeout = new Promise(function (resolve, reject) {
  resolve()
})
function timeoutFn(n) {
  if (n == 1) {
    setTimeout(function () {
      console.log(n)
    }, 1000)
  } else {
    setTimeout(function () {
      console.log(n + 1)
    }, (n + 1) * 1000)
  }

}
timeout.then(() => {
  timeoutFn(2)
}) */


/* //递归
function sum(n) {
  if (n == 1) return 1;
  return sum(n - 1) + n;
}
console.log('递归：', sum(5))  //15 */


/* var array = [];
for (var i = 0; i < 4; i++) {

  (function () {
    var a = i;
    array.push(new Promise(function (resolve) {

      setTimeout(function () {
        resolve(a);
      }, a * 1000);
    }));
  })(i);
}

new Promise(function (resolve) {

  resolve();
}).then(function () {

  return Promise.all(array);
}).then(function (data) {
  // 等待 3000ms 后， 打印 [ 0, 1, 2, 3 ]
  console.log(data);
}); */




//捕获错误   2019.12.28
/* let p1 = new Promise(function (resolve, reject) {
  resolve(42);
})
p1.then(function (value) {
  console.log(value);
  throw new Error('Boom!')
}).catch((error) => {
  console.log(error)
}) */

/* let p2 = new Promise(function (resolve, reject) {
  throw new Error('reject error')
})
p2.catch(function (err) {
  console.log('err:==', err);
  throw new Error('Boom!')
}).catch((error) => {
  console.log("error:==", error)
}) */

/* let p3 = new Promise(function (resolve, reject) {
  resolve(42)
})
p3.then((value) => {
  console.log(value);   //42
  return value + 1;
}).then((value) => {
  console.log(value)   //43
}) */

/* let p4 = new Promise(function (resolve, reject) {
  reject(42)
})
p4.catch((value) => {
  console.log(value);   //42
  return value + 1;
}).then((value) => {
  console.log(value)    //43
}) */


/* new Promise(function (resolve, reject) {
  resolve(1)
  console.log(2)
}).then((value) => {
  console.log(value)
}) */
//执行结果为 2 1   因为resolve函数的执行会在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务，所以先打印2，再打印1 。一般来说调用resolve或reject之后，Promise的使命就完成了，为避免意外，最好不要在调用resolve或reject之后再写代码，如果写也要在resolve或reject前面加上return，如下代码：

/* new Promise(function (resolve, reject) {
  return resolve(1)
  console.log(2)    //这个代码不会执行，因为在return语句后面，所以这个程序的运行结果是只打印1
}).then((value) => {
  console.log(value)
}) */



//promise的resolve后面再抛出错误，不会执行
const p1 = new Promise((resolve, reject) => {
  resolve(1);
  throw new Error('error')
})
p1.then(value => {
  console.log('value:==', value)   //value:== 1
}).catch(error => {
  console.log("error:==", error)   //这句代码不会执行，因为一旦promise的状态改变了，就不会再变，已经是resolved了就不会变成rejected
})



