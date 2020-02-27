/* function aa() {
  console.log('foo:===', this);

}
aa()  //this指向window

function foo() {
  return function () {
    console.log('return function:===', this);

  }
}
foo()()  //this指向window


var foo = {
  bar: function () {
    console.log('foo.bar:===', this);
  }
}
foo.bar()  //this指向foo 即this 是{bar:function(){console.log('foo.bar:===',this)}} */



/* var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

console.log(foo.bar())  //2

console.log((foo.bar)());  //2  仍然是foo.bar在foo这个类中去调用的，所以还是2

console.log((foo.bar = foo.bar)());  //1  把foo.bar这个匿名函数赋值给了foo.bar然后再调用它，这是在全局环境下调用匿名函数，所以是1

console.log((false || foo.bar)());  //1

console.log((foo.bar, foo.bar)());  //1 */



//执行上下文栈
var scope = 'global scope';
function checkScope() {
  var scope = 'local scope';
  function f() {
    return scope
  }

  return f()
}

console.log(checkScope()); //local scope



/* var scope = 'global scope';
function checkScope() {
  var scope = 'local scope';
  function f() {
    return scope
  }

  return f
}

console.log(checkScope()());  //local scope */






