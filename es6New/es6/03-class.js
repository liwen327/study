// this的指向问题
/* class Logger {
  constructor() {

  }
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);

  }
}

const logger = new Logger();
const { printName } = logger;
printName();   */  //Uncaught TypeError: Cannot read property 'print' of undefined at printName

// printName方法中的this默认指向Logger类的实例，但是如果将这个方法提取出来单独使用，this会指向该方法运行
//时所在的环境（由于class内部是严格模式，所以这里this指向的是undefined），从而找不到print方法而报错

//解决方案：1. 一个简单的方法：在构造函数中绑定this，这样就不会找不到print方法了

/* class Logger {
  constructor() {
    this.printName = this.printName.bind(this)   // 在构造函数中绑定this
  }
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);

  }
}

const logger = new Logger();
const { printName } = logger;
printName();   // Hello there */

//2. 使用箭头函数绑定this
/* class Obj {
  constructor() {
    this.getThis = () => this;  //this始终指向Obj的实例
  }
}

const myObj = new Obj();

console.log(myObj.getThis() === myObj);   //true */

// 3. 使用proxy，获取方法时自动绑定this
class Logger {
  constructor() {
    this.printName = this.printName.bind(this)   // 在构造函数中绑定this
  }
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);

  }
}
function selfish(target) {
  const cache = new WeakMap();
  const handler = {
    get(target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

const logger = selfish(new Logger());





/**静态方法：类相当于实例的原型，在类中定义的方法都可以在实例中访问 ，但是如果在类的方法前面加上static，那表明
 * 这个静态方法只能通过类来访问，不能通过实例来访问
 *  */

/* // 实例调用静态方法会报错
class Foo {
  static sayHello() {
    console.log('static: sayHello!');

  }
}

Foo.sayHello();
const foo = new Foo();
foo.sayHello()   // Uncaught TypeError: foo.sayHello is not a function */

//子类也可以调用父类的静态方法
class Foo {
  static classMethod() {
    return 'Hello'
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too'
  }
}
console.log(Bar.classMethod());   //Hello, too

/**
 * 私有属性的提案  在class中，在私有属性前面加#
 */

class increasingCounter {
  #count = 0
  get value() {
    console.log('获取当前count值');
    return this.#count;

  }
  increment() {
    this.#count++
  }
}
const counter = new increasingCounter();
console.log(counter.#count); // Uncaught SyntaxError: Private field '#count' must be declared in an enclosing class
counter.#count = 42;    // #count是私有属性













