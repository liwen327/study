/**
 *
 * 原型链继承方式
 */

/* function Parent(name) {
  this.name = name
  this.colors = ['red', 'green']
}
Parent.prototype = {
  constructor: Parent,
  sayName: function () {
    console.log(this.name);

  }
}

function Child(name) {
  this.name = name
}

Child.prototype = new Parent()

let child = new Child('Mike')
child.sayName()   //Mike
//接下来说原型链继承的缺点：
var child1 = new Child('Mike')
child1.colors.push('blue')
console.log('child1.colors:==', child1.colors);  //["red", "green", "blue"]

var child2 = new Child('Mike')
console.log('child2.colors:==', child2.colors);//["red", "green", "blue"] */


/**
 *
 * 由于原型链实现继承时有两个主要的问题：
 * 1、如果在父类的构造函数中创建一个引用类型的值，如上例中的colors，改变了child1连带着把child2也改变了，如果child2不想改变怎么办？
 * 2、在创建子类型的实例时，没办法向父类的构造函数传递参数，更确切的说是没办法在不影响所有实例的情况下传递参数。
 * 综上：所以就有了借用构造函数的继承方法
 */

/* //借用构造函数的继承方法
function Parent() {
  this.colors = ['red', 'green']
}

function Child() {
  //继承了Parent
  Parent.call(this, 'lily')  //this指向Child构造函数
  //这样做其实是在Child的实例中调用了Parent的构造函数，这样就会在新Child对象上执行Parent构造函数中定义的所有对象初始化代码，
  //结果每个Child实例就会有colors的副本了。同时也向Parent中传递了‘lily’参数
}

var child1 = new Child()
child1.colors.push('blue');
console.log('child1.colors:==', child1.colors); //["red", "green", "blue"]

var child2 = new Child()
console.log('child2.colors:==', child2.colors); //["red", "green"] */

/**
 * 单独使用借用构造函数也有问题：
 * 1、所有的属性和方法都在构造函数中定义，那子类的所有实例都不能共享了。
 * 2、在父类的原型中定义的方法，对子类是不可见的，为什么为什么？不是有原型链吗？因为只是在子类的构造函数中调用了父类的构造函数，并没有发生原型链。
 */

/**
 * 所以就出现了原型和构造函数复合的继承方式
 */

function Parent(name) {
  this.name = name
  this.colors = ['red', 'green']
}

Parent.prototype.sayName = function () {
  console.log(this.name);

}

function Child(name, age) {   //构造函数继承
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()   //原型链继承

Child.prototype.sayAge = function () {
  console.log(this.age);

}

var instance1 = new Child('Mike', 27)
instance1.colors.push('blue')
console.log(instance1.colors);  //["red", "green", "blue"]
instance1.sayAge()   //27

var instance2 = new Child('Lily', 29)
console.log(instance2.colors);  //["red", "green"]
instance2.sayAge()   //29



//Object.create()   原型式继承
function object(o) {
  function F() { }
  F.prototype = o;
  return new F();

}

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"











