/**
 * class的继承
 */
/* class Point {

}
class colorPoint extends Point {
  constructor() {

  }
}
const point = new colorPoint();  // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//上面代码在实例化colorPoint类时报错，就是没有在子类的constructor中调用super方法 */


// 子类必须执行一次super函数
/* class A {

}
class B extends A {
  constructor() {
    super()
  }
}

const b = new B() */


//super作为对象使用时：在普通方法中，指向父类的原型对象,在静态方法中，指向父类

/* class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p());   // 2  指向父类的原型对象

  }
}

let b = new B() */

// 由于super指向父类原型，那么定义在父类实例上的属性，super是访问不到的
/* class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  constructor() {
    super()
  }
  get m() {
    return super.p
  }
}

const b = new B();
console.log(b.m);  //undefined */

//在子类的普通方法中调用super时，super内部的this指向子类的实例
/* class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);

  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print()
  }
}
const b = new B()
b.m()   //2 */


//super作为对象，在静态方法中调用时，指向父类，而不是指向父类的原型
/* class Parent {
  static myMethod(msg) {
    console.log('static: ', msg);

  }
  myMethod(msg) {
    console.log('instance: ', msg);

  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg)
  }
  myMethod(msg) {
    super.myMethod(msg)
  }
}

Child.myMethod(1);   //static:  1
const child = new Child();
child.myMethod(2)   //instance: 2 */


//在子类的静态方法中通过super对象调用父类的方法时，方法内部的this指向当前子类，而不是子类的实例
/* class A {
  constructor() {
    this.x = 1
  }
  static print() {
    console.log(this.x);

  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print()
  }
}
B.x = 3;
B.m()  //3 */


//prototype与__proto__属性
/* class A {

}
class B extends A {

}

console.log(B.__proto__ === A);   //true
console.log(B.prototype.__proto__ === A.prototype);   //true
//子类B的__proto__属性指向A，子类B的Prototype的__proto__属性指向父类A的prototype */

//es6可以继承原生构造函数，而es5不能
/* class myArray extends Array {
  constructor(...args) {
    super(...args)
  }
}
let arr = new myArray();
arr[0] = 'red';
console.log(arr.length);    //1
arr.length = 0;
console.log(arr[0]);   //undefined */

//es6可以实现Mixin
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new Mix());  //拷贝实例属性
      }
    }
  }
  for (let mixin of mixins) {
    copyProperties(Mix, mixin);   //拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype);  //拷贝原型属性
  }

  return Mix;

}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc)
    }
  }
}












