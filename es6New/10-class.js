/* class Point {
  constructor() { }
}

Object.assign(Point.prototype, {
  getValue() {
    console.log('getValue:', 'value');

  },
  toString() { }
})

let point = new Point()
point.getValue()


//constructor默认返回实例对象，但是通过Object.create(null)可以指定返回另外一个对象，导致new Foo() instanceof Foo = false
class Foo {
  constructor() {
    return Object.create(null)
  }
}

console.log('Object.create:==', new Foo() instanceof Foo)   //false */


//继承  extends  super
class Point {
  toString() {
    console.log('toString');

  }
}
//子类必须的构造函数中调用父类的super，否则新建实例时会报错，这是因为子类自己的this对象，必须通过父类的构造函数完成塑造，得到与父类同样的
//属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法，如果不调用super，子类就得不到this对象。
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)  //调用父类的constructor(x,y)
    this.color = color
  }
  toString() {
    return this.color + ' ' + super.toString()  //调用父类的toString()
  }
}

let instance = new ColorPoint()


//父类的静态方法会被 子类继承   (静态方法不可以被实例继承，但是可以被子类继承，只能通过类来调用，不能通过实例来调用)
/* class A {
  static hello() {
    console.log('hello');

  }
}

class B extends A {
  constructor() {
    super()
  }
}

B.hello()   //hello */






















