
//1. ['abcd','abef','abhi'] 打印出这个数组中的所有'ab'
function print(arr) {
  let reg = /ab/ig;
  // arr.forEach(item => {
  //   console.log('item: ', reg.test(item));
  //   // return item.indexOf('ab')
  // })
  arr.filter(item => {
    console.log('item: ', item);
    return reg.test(arr)
  })
  console.log('arr: ', arr);
}
print(['abcd', 'abef', 'abgh'])


//2.for循环
// for (var i = 0, j = 0; i < 10;j<6 ;i++;j++) {   //会报错
//   console.log('i+j: ', i + j);
// }

//3.立即执行函数，会继续沿着作用域链向上查找变量
/* var a = 1;
(function () {
  // var a = 2;
  console.log('a: ', a);
})() */


//4.如果推入的是匿名函数，然后再执行是不是还和闭包有关系？

/* function fn() {
  var arr = []
  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    })
  }
}
console.log(fn());   //题目可能不是这样的，再想想 */

//5.promise  打印结果为0，3，1    2不会被打印出来，因为没有成功的条件
setTimeout(function () {
  console.log(1);
}, 0)

// new Promise(function (resolve, reject) {
//   resolve(2);
//   console.log(0);
// }).then(console.log())
new Promise(function (resolve, reject) {
  resolve(2);
  console.log(0);
}).then(r => {
  console.log(r)   // 这种情况是 ：0 3 2 1
})

console.log(3);

//6.匿名函数   作用域链，同层函数，活动对象等等
/* var a = 5;
function todo() {
  var a = 9;
  return function () {
    a = 7;
  }
}
todo()();
console.log('====================================');
console.log(a);  //5    这里a是在全局作用域中，那它的第一层活动对象就是全局的，不管其函数中的a，全局不会去局部函数作用域中查找变量。
console.log('===================================='); */

//7.立即执行表达式
/* (function () {
  var greet = 'Hello Shuidi';
  var toGreet = [].filter.call(greet, function (element, index) {
    console.log('element: ', element);
    return index > 5;
  });
  console.log(toGreet);   // ["S", "h", "u", "i", "d", "i"]
}()); */

//8. 函数有关的面试题    函数会提前作声明，会移到代码的最顶端
/* console.log(foo());   //8
function foo() {
  return bar();
  var bar = function () { return 5; }
  var bar = () => 6;
  var bar = (function () { return 7; })();
  function bar() { return 8; }
} */


//9. localStorage中存的是字符串
/* localStorage.setItem('show', false);
console.log(localStorage.show || '显示');   //false
console.log(typeof localStorage.show); */




