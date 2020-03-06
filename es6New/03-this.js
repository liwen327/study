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



/* //执行上下文栈
var scope = 'global scope';
function checkScope() {
  var scope = 'local scope';
  function f() {
    return scope
  }

  return f()
}

console.log(checkScope()); //local scope */



/* var scope = 'global scope';
function checkScope() {
  var scope = 'local scope';
  function f() {
    return scope
  }

  return f
}

console.log(checkScope()());  //local scope */


//阶乘  递归函数
/* function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('factorial:', factorial(5));

var anotherFactorial = factorial
factorial = null
anotherFactorial(5) */  //Uncaught TypeError: factorial is not a function  因为factorial已经不是一个函数了


//由于会报上面的错误，所以就用到了arguments.callee，arguments.callee是一个指向正在运行的函数的指针
/* function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * arguments.callee(n - 1);
  }
}
var anotherFactorial = factorial
factorial = null
console.log(anotherFactorial(5))   //120   不报错了 */



/* //但是arguments.callee在严格模式下会报错，不过可以用  ！命名函数表达式 来达到同样的效果  ,这种方式在严格模式和非严格模式下都可以
var factorial = (function f(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * f(n - 1);
  }
})
console.log('f:==', factorial(5));  //120 */


/* //闭包
function getResult() {
  var arr = new Array();
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      return i;
    }
  }
  return arr;
}

console.log('闭包：', getResult()[0]()); //10
console.log('闭包：', getResult()[1]());  //10

//接下来我们强制创建一个匿名函数强制让闭包的行为符合预期，
function getResult1() {
  var arr = new Array();
  for (var i = 0; i < 10; i++) {
    arr[i] = function (num) {
      //再创建一个匿名函数强制让闭包的行为符合预期，这里并没有把闭包直接赋值给数组，而是创建一个匿名函数，并将立即执行该匿名函数的结果返回给数组，
      //这里的匿名函数有一个参数num,也就是最终函数要返回的值，在每个调用匿名函数时，我们传入了i，由于函数是按值传递的，所以会将变量i的当前值
      //复制给num,而这个函数内部又有一个匿名函数并返回num的闭包，因引，arr数组中每个函数都有自己num的一个副本，因此就可以返回不同的数值了。
      return function () {
        return num;
      }
    }(i)
  }
  return arr;
}
console.log('闭包：', getResult1()[0]()); //0
console.log('闭包：', getResult1()[1]());  //1 */



/* //this指向

var name = 'the window';
var obj = {
  name: 'my Object',
  getNameFunc: function () {
    return function () {
      return this.name;
    }
  }
}

//每个函数在被调用时都会自动取得两个特殊变量，this和arguments，内部函数在搜索这两个变量时，只会搜索到活动对象为止，因此永远不会访问到外部
//函数中的这两个变量，因为getNameFunc返回的匿名函数具有全局性，所以它的活动对象this是window，所以它不会去搜索getNameFunc的对象。

console.log('this指向：', obj.getNameFunc()());   //the window  obj.getNameFunc()是匿名函数function () {return this.name;}

var obj1 = {
  name: 'my Object',
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
}
console.log('this指向obj: ', obj1.getNameFunc()()); //my Object */

//闭包模仿块级作用域
function getNumber(count) {
  for (var i = 0; i < count; i++) {
    console.log('循环内的i:  ', i);

  }
  console.log('循环外的i: ' + i);  //这里打印出了10，循环结束了变量i并没有销毁，还保存在活动对象中

}
getNumber(10)

function getNumber1(count) {

  (function () {
    for (var i = 0; i < count; i++) {
      console.log('循环内的i:  ', i);

    }
  })()
  //下面这句报错，是因为循环在一个立即执行表达式中，执行完了i就被销毁了，所以下面这句打印会报i未定义
  console.log('循环外的i: ' + i);  //Uncaught ReferenceError: i is not defined
}
getNumber1(10)









