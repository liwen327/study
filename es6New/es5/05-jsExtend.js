//1. 原型链模式继承
/* function Parent() {
  this.property = true;
}

Parent.prototype.getProperty = function () {
  return this.property;
}

function Child() {
  this.subProperty = false;
}
//Child继承了Parent
Child.prototype = new Parent();

Child.prototype.getSubProperty = function () {
  return this.subProperty;
}

var child1 = new Child();
console.log(child1.getProperty());  //true */

//2. 借用构造函数继承
/* function Parent() {
  this.colors = ['red', 'green']
}

function Child() {
  // 继承了Parent
  Parent.call(this)
}
var child1 = new Child();
child1.colors.push('blue');
console.log(child1.colors);  //["red", "green", "blue"]

var child2 = new Child();
console.log(child2.colors);  //["red", "green"] */



//3. 构造函数和原型链组合继承

/* function Parent(name) {
  this.name = name;
  this.colors = ['red', 'green']
}
Parent.prototype.sayName = function () {
  alert(this.name);
}

function Child(name, age) {
  //继承属性
  Parent.call(this, name)
  this.age = age;
}

//继承方法
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayAge = function () {
  alert(this.age)
}

var child1 = new Child('Mike', 29);
child1.colors.push('blue');
console.log(child1.colors);    //["red", "green", "blue"]
child1.sayName();    // Mike
child1.sayAge();     // 29

var child2 = new Child('lily', 27);
console.log(child2.colors);   //["red", "green"]
child2.sayName();    // lily
child2.sayAge();     // 27 */


//4. 原型式继承  Object.create()

function object(o) {
  function F() { }
  F.prototype = o;
  return new F()
}

//上例就是Object.create()的源码，它并没有严格意义上的构造函数，是借助原型可以基于已有的对象创建新对象，
//同时还不必因此创建自定义类型
// ECMAScript5规范了Object.create(),它接收两个参数，一个用作新对象原型的对象。一个为新对象定义额外属性的对象

/* var person = {
  name: 'Mike',
  friends: ['lily', 'John']
}

var person1 = Object.create(person);
person1.name = 'zhangsan';
person1.friends.push('van');

var person2 = Object.create(person);
person2.name = 'lisi';
person2.friends.push('Linda');

console.log(person.friends);     //["lily", "John", "van", "Linda"]
console.log(person1.friends);     //["lily", "John", "van", "Linda"]
console.log(person2.friends);     //["lily", "John", "van", "Linda"] */


//Object.create()的第二个参数与Object.defineProperties()方法的第二个参数格式相同
var person = {
  name: 'Mike',
  friends: ['lily', 'John']
}

var person1 = Object.create(person, {
  name: {
    value: 'John'
  }
})
console.log(person1.name);   //John














