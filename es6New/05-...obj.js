
let obj = { name: "Mike", age: 26 }
let obj1 = { name: 'lily', age: 27, class: 2 }

let obj2 = { ...obj, obj1 }
console.log('展开运算符：', { ...obj });
console.log('展开运算符obj2：', obj2);

//展开运算符可以数组打散后作为各自独立的参数传入函数
let values = [-1, -2, -3, -4];
console.log('max：==', Math.max(...values, 0));  //max:== 0



//函数默认值
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const point = new Point();
console.log('point:==', point);  //Point:{x=0,y=0}

//解构赋值与函数默认值一起使用
function foo({ x, y = 5 }) {
  console.log(x, y);

}

foo({}) //undefined,5
foo({ x: 1, y: 2 }) //1,2
// foo() //报错：Uncaught TypeError: Cannot destructure property 'x' of 'undefined' as it is undefined.


//如果给函数参数一个默认的空对象，即默认值，就不会有上面不传入对象就报错了
function bar({ x, y = 5 } = {}) {
  console.log(x, y);

}
bar() //undefined,5

//思考：下面m1和m2有什么区别？
function m1({ x = 0, y = 0 } = {}) {
  return [x, y]
}

function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y]
}
console.log('m1:', m1());
console.log('m2:', m2());
//首先，这两个结果一样，区别是：m1函数参数的默认值是空对象，但是有解构赋值的默认值；m2的函数参数是一个有具体属性的对象，但是没有设置解构赋值的默认值


//rest参数
function add(...values) {
  let sum = 0
  for (var val of values) {
    sum += val
  }
  return sum
}
// let arr = [2, 3, 4]
console.log('rest参数：', add(2, 3, 4));  //9

// let getItem = () => { id: 1, name: 'mike' }   //报错：Uncaught SyntaxError: Unexpected token ':'  当箭头函数返回对象时，必须用()把对象括起来
let getItem = () => ({ id: 1, name: 'mike' })

const isEven = n => n % 2 === 0
const isSquare = n => n * n
console.log('isEven:', isEven(2));

















