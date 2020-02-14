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

var [a, , b] = [1, 2, 3];

// object matching
var { op: a, lhs: { op: b }, rhs: c }
  = { op: 4, lhs: { op: 5 }, rhs: 6 }



// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
// var { op, lhs, rhs } = getASTNode()
var { op, lhs, rhs } = { op: 7, lhs: 8, rhs: 9 }
console.log('op:===', op);


// Can be used in parameter position
function g({ name: x }) {
  console.log(x);
}
g({ name: 5 })





