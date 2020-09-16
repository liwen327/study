
/**
 * 闭包：
 * modified by liwz at 2020.07.31
  */


function createFn(propertyName) {
  return function (obj1, obj2) {
    var value1 = obj1[propertyName];
    var value2 = obj2[propertyName];

    if (value1 < value2) {
      return -1;
    }
    else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

//闭包只能取得包含函数的最后一个值，如下例子：
/* function createFunctions() {
  var arr = new Array();
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      return i;
    }
  }
  return arr;
}
console.log(createFunctions()[0]());  //10
console.log(createFunctions()[1]());  //10
console.log(createFunctions()[9]());  //10 */

//我们可以再创建一个匿名函数让闭包的行为符合预期
function createFunctions() {
  var arr = new Array();
  for (var i = 0; i < 10; i++) {
    arr[i] = function (num) {
      return function () {
        // console.log(num);
        return num;
      };
    }(i)
  }
  return arr;
}

console.log(createFunctions()[0]());  //0
console.log(createFunctions()[1]());  //1
console.log(createFunctions()[2]());  //2

//闭包
function closure() {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = function (num) {
      return function () {
        console.log(num);
        // return num
      }
    }(i)
  }
  return arr;
}
closure()[0](); //0

//闭包作用：
//1、模仿块级作用域
//这个例子说明js没有块级作用域，因为i在for循环外面依然可以访问，表明for语句块的变量i是在包含函数而非语句块中创建的
/* function outputNum(count) {
  for (var i = 0; i < count; i++) {
    console.log(i)    //依次打印：0,1,2,3,4
  }
  console.log('包含函数中的i: ', i)   //最后i=5,跳出for循环，这里打印5
}
outputNum(5); */

//要想模仿块级作用域，必须采用匿名函数（即私有作用域），其匿名函数的语法如下：
(function () {
  //这里是块级作用域
})()

//下面例子即：匿名函数模仿块级作用域
/* function outputNums(count) {
  (function () {
    //这里是块级作用域，外部不能访问
    for (var i = 0; i < count; i++) {
      console.log(i);    //依次打印： 0,1,2,3,4
    }
  })();
  console.log('包含函数中的i: ', i);  //Uncaught ReferenceError: i is not defined
}
outputNums(5) */

//2、闭包可以在对象是创建私有变量

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

/**
 * 在上面这个函数内部，有3个私有变量：num1,num2和sum。在函数内部可以访问这三个变量，但是在函数外部是不能访问的
 * 。如果在这个函数内部创建一个闭包，那么闭包通过自己的作用域链也可以访问这几个变量，利用这一点，就可以创建用于访
 * 问私有变量或私有函数的公有方法（即特权方法）
 */

function myObject() {
  //私有变量和私有函数
  var privateVariable = 10;

  function privateFn() {
    return false;
  }
  //特权方法
  this.publicMethod = function () {
    privateVariable++;
    return privateFn()
  }
}
var obj1 = new myObject();

console.log(obj1.publicMethod()); // false
// 上面例子中特权方法作为闭包有权访问包含函数（myObject构造函数）中所有变量和函数。私有变量privateVariable和
// 私有方法privateFn只能通过特权方法publicMethod()来访问，除此之外，没有其它方法可以访问它们。



//私有变量和特权方法
/* function Person(name) {
  this.getName = function () {
    return name;
  }
  this.setName = function (value) {
    name = value
  }
}

var person1 = new Person('Mike');
console.log(person1.getName()); // Mike
person1.setName('John');
console.log(person1.getName());// John

var person2 = new Person('lily');
console.log(person2.getName()); //lily
person2.setName('Meimei');
console.log(person2.getName()); //Meimei
console.log(person1.getName());   //Mike */

// 私有变量name在person1和person2两个实例中都不相同，因为getName和setName这两个方法是在构造函数内部创建的，每次调用构造函数
//都会重新创建这两个方法。
//在构造函数中定义特权方法有一个缺点，即你必须使用构造函数来达到这个目的，6章讲过，构造函数模式的缺点是针对每个实例都会创建同样一组新
//方法，这非常浪费资源，而使用静态私有变量来实现特权方法就可以避免这个问题。

//静态私有变量
/* (function () {
  var name = "";
  Person = function (value) {
    name = value;
  }

  Person.prototype.getName = function () {
    return name;
  }
  Person.prototype.setName = function (value) {
    name = value;
  }
})()

var person1 = new Person('Mike');
console.log(person1.getName());  //Mike
person1.setName('John');
console.log(person1.getName());  //John

var person2 = new Person('lily');
console.log(person2.getName()); //lily
console.log(person1.getName()); //lily */

//上面例子中，name就变成了静态的、由所有实例共享的属性，即在一个实例上调用setName()会影响所有实例，调用setName和新建一个Person实例
//都会赋予name属性一个新值，结果就是所有实例都会共享这一个新值。


var a = 1;
(function () {
  var a = 2;
  console.log('a: ', a);
})






