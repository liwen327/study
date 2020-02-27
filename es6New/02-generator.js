

/* function* HelloGenerator() {
  yield 'hello';
  yield 'world';
  return 'end';
}
let hw = HelloGenerator();
console.log(hw.next());  //{value: "hello", done: false}
console.log(hw.next());  //{value: "world", done: false}
console.log(hw.next());  //{value: "end", done: true}
console.log(hw.next());  //{value: "undefined", done: true}
console.log(hw.next());  //{value: "undefined", done: true} */

/* function* f() {
  console.log('执行了');

}
let generator = f()
setTimeout(function () {
  generator.next()
}, 3000) */


//yield不能用在普通函数里面，只能用在Generator函数中
/* let arr = [1, [[2, 3], 4], [5, 6]]
let flat = function* (a) {
  a.forEach(item => {
    if (typeof item !== number) {
      yield * flat(item)
    } else {
      yield item      //Uncaught SyntaxError: Unexpected identifier
    }
  });
}
for (var f of flat(arr)) {
  console.log(f);
} */

//上面这种会报错：Uncaught SyntaxError: Unexpected identifier,因为forEach是普通函数，在里面使用yield会报错，把forEach改成for
/* let arr = [1, [[2, 3], 4], [5, 6]]
let flat = function* (a) {
  for (let i = 0; i < a.length; i++) {
    var item = a[i]
    if (typeof item !== 'number') {
      yield* flat(item)
    } else {
      yield item
    }
  }
}

for (var f of flat(arr)) {
  console.log(f);  // 1,2,3,4,5,6

} */


//无限循环
/* var it = idMaker()
function idMaker() {
  var idIndex = 0
  return {
    next() {
      return {
        value: idIndex++, done: false
      }
    }
  }
}
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); */

/* let str = new String('hi');
let arrStr = [...str];
console.log('arrStr:=====', arrStr);

str[Symbol.iterator] = function () {
  return {
    next: function () {
      if (this.first) {
        this.first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    first = true
  };
};

console.log('[...str]', [...str]); */


//函数的作用域链
/* var scope = 'global scope'
function checkScope() {
  var scope2 = 'local scope'
  return scope2;
}
console.log(checkScope());   //local scope       先在当前作用域查找，如果找不到，再在父作用域中查找，在这个函数中，当前任用域中有，所以就是local scope
 */


/* //call,apply,bind
let arr = {
  sayHello(name) {
    console.log('Hello, ' + name)
  }
}
let arr1 = {}

arr.sayHello.call(arr1, 'mike');
arr.sayHello.apply(arr1, ['john']);
arr.sayHello.bind(arr1, 'mike'); */


/* class Foo {
  foo(baz) {
    bar.call(this.baz)
  }
}
function bar(baz) {
  return this.snaf = baz
} */


//extends super
/* class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super()
    console.log(super.p())
  }

}
const c = new B()
 */

/* class A {
  constructor() {
    this.x = 1
  }
  print() {
    console.log(this.x);

  }
}

class B extends A {
  constructor() {
    super()
    this.x = 2
  }
  m() {
    super.print()
  }
}
const c = new B()
c.m() //2    当在子类中的普通方法中用super调用父类的方法时，this指向的是子类实例，所以这里c.m()为2 */


//如果super作为对象，用在静态方法之中，这时super指向父类，而不是父类的原型
class Parent {
  static myMethod(msg) {
    console.log('static ', msg);

  }
  myMethod(msg) {
    console.log('instance ', msg);

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
Child.myMethod(1)  //static 1

const child = new Child()

child.myMethod(2)   //intance 2









