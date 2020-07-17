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
class Parent {
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
child.myMethod(2)   //instance: 2



