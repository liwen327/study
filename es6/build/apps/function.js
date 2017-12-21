'use strict';

var x = 1;
function f(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

  console.log(y);
}
f(2); //2

/*let x = 1;
function f(y=x){
  let x = 2;
  console.log(y);
}
f();*/

var foo = 'outer';
function bar() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return foo;
  };

  var foo = 'inner';
  console.log(func());
}
bar();