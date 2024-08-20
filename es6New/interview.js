/*
 * @Author: liwz
 * @Date: 2023-10-12 10:21:57
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-19 15:05:17
 * @FilePath: /reactJs/Users/liwenzhi/study/study/es6New/interview.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/* var scope = 'global scope'
function checkScope() {
  var scope = 'local scope'
  function f() {
    return scope;
  }
  return f();
}
console.log(checkScope()); //local scope   */

/* var scope = 'global scope'
function checkScope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f
}
console.log(checkScope()())   //local scope    这里也可以这样理解，函数是静态词法作用域，函数在定义时就决定了它的执行环境 */

/* console.log('global this:==', this);
console.log(this instanceof Object);//true
console.log(Math.random()); */

/* var oDiv = document.createElement('div');
for (var i in oDiv) {
  console.log(i);

} */

/* let bar = [1, 2]
let baz = [...bar]
console.log(baz);

let foo = { a: 1 }
console.log([foo]);//[{a:1}]
console.log({ ...foo });   //{a:1} */

var [a, , b] = [1, 2, 3]

// object matching
var {
  op: a,
  lhs: { op: b },
  rhs: c
} = { op: 4, lhs: { op: 5 }, rhs: 6 }

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
// var { op, lhs, rhs } = getASTNode()
var { op, lhs, rhs } = { op: 7, lhs: 8, rhs: 9 }
console.log('op:===', op)

// Can be used in parameter position
function g({ name: x }) {
  console.log(x)
}
g({ name: 5 })

function count(str) {
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
      //对象初始化；如果key在对象中找不到，那么会返回undefined,反向思维
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  } //取出各个字母和它的个数，作为一个新对象保存在obj对象中
  return obj
}
console.log(count('shhkfahkahsadhadskhdskdha'))
