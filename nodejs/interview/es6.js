//类
class Point {
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
console.log(point1._proto_ == point2._proto_)   //true


//mvvm的双向数据绑定的原理
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
obj.hello = 'abc' //set方法被调用了，参数是 abc

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



