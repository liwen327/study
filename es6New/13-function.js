/* //es6函数的默认值是惰性求值的
let x = 99;
function foo(p = x + 1) {
  console.log('p:', p);
}
foo();  //p:100
x = 100;
foo(); //p:101 */



/* //函数的rest参数
function add(...values) {
  let sum = 0;
  console.log('values:', values);
  for (let i in values) {
    console.log('for in i:', i);

  }

  for (let i of values) {
    sum += i;
  }
  return sum;
}
console.log(add(1, 2, 3)); */

/* //用rest代替arguments
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}
console.log('arguments sort:', sortNumbers(3, 4, 1));   //[1, 3, 4]

function sortNumbers(...numbers) {
  return numbers.sort()
}
//也可以用箭头函数
let sortNumber = (...numbers) => numbers.sort();
console.log('rest参数代替arguments sort:', sortNumber(3, 4, 1));   //[1, 3, 4] */


/* //箭头函数可以简化回调函数
console.log([1, 2, 3].map(function (x) {
  return x * x
}));
console.log([1, 2, 3].map(x => x * x));

//！另一个排序的例子
var values = [1, 4, 2]
var result = values.sort(function (a, b) {
  return a - b;
})
console.log('sort:', result);   //[1,2,4]

var result = values.sort((a, b) => a - b);
console.log('箭头函数sort:', result);   //[1,2,4] */


/* //箭头函数中的this是在定义时就固定的，不会因为执行环境的变化而有所变化

function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100)
}
var id = 21;
//按理说，setTimeout中一个箭头函数，这个箭头函数定义生效是在foo函数中，而它真正执行要在100ms以后，如果是普通函数，
//执行时this应该指向window,这时应该输出21，但是箭头函数导致this总是指向函数定义生效时所在的对象（此例是obj={id:42}）
//所以输出的是41
let obj = { id: 42 };
foo.call(obj);    //42 */

/* function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  setInterval(() => this.s1++, 1000);
  setInterval(function () {
    this.s2++
  }, 1000)
}

const timer = new Timer();
setTimeout(() => console.log('s1:', timer.s1), 3100);  //s1: 3
//s2用的是普通函数，处以3100ms之后执行，这时this已经指向window了
setTimeout(() => console.log('s2:', timer.s2), 3100);  //s2: 0
//箭头函数的this不变，是因为箭头函数根本没有自己的this，它的this就是外层函数的this */


/* //不适合使用箭头函数的场景
//1、对象内部有自己的this时
var cat = {
  lives: 9,
  // jumps: () => {
  //   console.log(this.lives);
  // }
  jumps() {
    console.log('普通函数：', this.lives);

  }
}
//当对象中的方法写成箭头函数时，使得this指向全局对象window，因此会返回undefined，这是因为对象不构成单独的作用域，
//导致jumps箭头函数定义时的作用域就是全局作用域。如果定义成普通函数，则this指向cat，所以cat.lives=9
cat.jumps()   //undefined    箭头函数调用时打印undefined
cat.jumps()   //普通函数：9    普通函数时打印9 */


//用函数柯里化改写阶乘函数，并用尾调用优化来实现阶乘函数的复杂度，把O(n)的复杂度降低为了O(1)
/* function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}
function factorial(n) {
  return tailFactorial(n, 1)
}
console.log(factorial(5))   //120 */

//函数柯里化
function currying(fn, n) {
  return function (m) {
    console.log('m:', m);
    console.log('n:', n);

    return fn.call(this, m, n)
  }
}
function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}
const factorial = currying(tailFactorial, 1)
console.log(factorial)
console.log(factorial(5))   //120















