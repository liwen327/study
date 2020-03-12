
/* var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);

}

bar.call(foo, 'lily', 29)  //1,lily,29
var bindFoo = bar.bind(foo, 'Mike');
bindFoo();   //这里还要再调用一下bindFoo，为什么？因为调用bind返回的是一个新函数，相当于拷贝出来的新函数和原函数没有任何关系，也指向不同的内存地址
 */

/* //bind的理解
var foo = function () { }
var bar = foo
console.log(foo === bar);   //true

//---------------------------------------------/

var foo = function () { }
var bar = function (callback1, callback2) {
  console.log(callback1 === callback2);  //true

}
bar(foo, foo)

//---------------------------------------------/

var foo = function () { }
var bar = function () { }

console.log(foo === bar);   //false    //两个函数，不在同一个内存地址中，所以返回false

//---------------------------------------------/
*/

/* //bind
var foo = function () { }
var fooBind = foo.bind()
console.log(foo === fooBind);   //false

//---------------------------------------------/

var foo = function () { };
var fooBind = foo.bind();

var bar = function (callback1, callback2) {
  console.log(callback1 === callback2);  //false

}

bar(foo, fooBind) */


/* //两个函数都用bind，返回的也不是同一个函数,是两个完全独立的函数
var foo = function () { }
var bindFoo1 = foo.bind();
var bindFoo2 = foo.bind();

console.log(bindFoo1 === bindFoo2);  //false */


/* //让bindFoo1和bindFoo2都指向obj
var obj = { key: 'value' };
var foo = function () {
  return this;
}

var bindFoo1 = foo.bind(obj);
var bindFoo2 = foo.bind(obj);

console.log(bindFoo1());   //{key: "value"}
console.log(bindFoo2());   //{key: "value"}
console.log(bindFoo1() === bindFoo2());  //true   他们都指向了同一个obj

console.log(bindFoo1 === bindFoo2);  //false   虽然他们都指向obj，但是bindFoo1和bindFoo2仍然是两个独立的函数，指向不同的内存地址，与函数中的this无关
 */


/* //bind的用法
var obj = { key: 'value' };
var foo = function () {
  console.log(this);    //{key: "value"}   即this指向了obj

}.bind(obj)

foo()

//下面是另一个bind的用法
var obj = { key: 'value' };
var foo = function () {
  console.log(this);    //{key: "value"}   即this指向了obj

}

foo.bind(obj)()  //foo.bind()返回了一个新函数，后面再调用这个新函数 */

/* var obj = {
  name: 'Mike',
  method: function () {
    setTimeout(function () {
      console.log(this);  //obj   敲黑板：function(){console.log(this)}.bind(this)返回值是一个函数
      console.log('name:', this.name);   //mike


    }.bind(this), 1000)
  }
}
obj.method()
//下面是另一种实现
var obj = {
  name: 'lily',
  foo: function () {
    var argFun = function () {
      console.log("this:", this);   //{name: "lily", foo: ƒ}  即obj对象本身
      console.log('name:', this.name);   //lily

    }
    var argBind = argFun.bind(this);
    setTimeout(argBind, 1000)
  }
}

obj.foo() */

//bind的模拟实现    第一版
//通过call或apply先实现this的指向
/* Function.prototype.bind2 = function (context) {
  var self = this;
  return function () {
    self.apply(context)
  }
}

var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);

}

// bar.call(foo, 'lily', 29)  //1,lily,29
var bindFoo = bar.bind(foo, 'Mike');

bindFoo('28')  //1,Mike,28


//bind2 传参的模拟实现  第二版
Function.prototype.bind2 = function (context) {
  var self = this;
  //获取bind2从第2个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    //这个时候的arguments指bind2返回的函数中传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
  }
} */

/* //如果bind用于构造函数，那this的指向会失效，但是参数依然可以有效
var value = 2
var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'Mike';

var bindFoo = bar.bind(foo, 'lily')

var obj = new bindFoo('18')  //undefined,lily,18
//尽管在全局作用域和foo上都已定义了value，但是这里还是打印undefined，说明了绑定的this指向foo已经失效了。因为这个时候this已经指向了obj

console.log(obj.habit);  //shopping
console.log(obj.friend);  //Mike


//第三版
Function.prototype.bind2 = function (context) {
  var self = this;
  //获取bind2从第2个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  var fbound = function () {
    //这个时候的arguments指bind2返回的函数中传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);

    //当作为构造函数时，this指向实例，self指向绑定函数，因为下面一句'fbound.prototype = this.prototype'已经修改了fbound.prototype为绑定函数的prototype，此时结果为true，当结果为true的时候，this指向实例。
    //当作为普通函数时，this指向window，self指向绑定函数，此时结果为false，当结果为false时，this指向绑定的context.
    self.apply(this instanceof self ? this : context, context, args.concat(bindArgs));
  }

  //修改返回函数的prototype为绑定函数的prototype
  fbound.prototype = this.prototype
  return fbound;
}



//第四版
Function.prototype.bind2 = function (context) {
  var self = this;
  //获取bind2从第2个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);

  //声明一个空函数
  var fNOP = function () { }

  var fbound = function () {
    //这个时候的arguments指bind2返回的函数中传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);

    //当作为构造函数时，this指向实例，self指向绑定函数，因为下面一句'fbound.prototype = this.prototype'已经修改了fbound.prototype为绑定函数的prototype，此时结果为true，当结果为true的时候，this指向实例。
    //当作为普通函数时，this指向window，self指向绑定函数，此时结果为false，当结果为false时，this指向绑定的context.
    self.apply(this instanceof self ? this : context, context, args.concat(bindArgs));
  }

  //修改返回函数的prototype为绑定函数的prototype,但是这样直接修改fbound的prototype,连带函数的prototype也修改了，可以通过一个空函数来进行中转

  // fbound.prototype = this.prototype
  fNOP.prototype = this.prototype
  fbound.prototype = new fNOP()
  return fbound;
} */




//最终代码
/* Function.prototype.bind2 = function (context) {

  if (typeof this !== 'function') {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  //获取bind2从第2个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);

  //声明一个空函数
  var fNOP = function () { }

  var fbound = function () {
    //这个时候的arguments指bind2返回的函数中传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);

    //当作为构造函数时，this指向实例，self指向绑定函数，因为下面一句'fbound.prototype = this.prototype'已经修改了fbound.prototype为绑定函数的prototype，此时结果为true，当结果为true的时候，this指向实例。
    //当作为普通函数时，this指向window，self指向绑定函数，此时结果为false，当结果为false时，this指向绑定的context.
    self.apply(this instanceof self ? this : context, context, args.concat(bindArgs));
  }

  //修改返回函数的prototype为绑定函数的prototype,但是这样直接修改fbound的prototype,连带函数的prototype也修改了，可以通过一个空函数来进行中转

  // fbound.prototype = this.prototype
  fNOP.prototype = this.prototype
  fbound.prototype = new fNOP()
  return fbound;
} */


//调用两遍bind会改变原来函数的this指向吗
let obj = {
  name: 'mike'
}
let foo = function () {
  console.log(this);
}


let bind1 = foo.bind(obj);
bind1()   //obj
let bind2 = bind1.bind(obj);
bind2();  //obj
console.log('bind1:', bind1);
console.log('bind2:', bind2);













