
//Object.keys()
function Person() { }
Person.prototype.name = 'lily';
Person.prototype.age = 29;
Person.prototype.sayName = function () {
  console.log('sayName: ', this.name);
}

console.log('====================================');
console.log(Object.keys(Person.prototype));  //["name", "age", "sayName"]
console.log('====================================');

let person1 = new Person();
person1.name = 'john';
person1.age = 20;
console.log('person1: ', Object.keys(person1));   //["name", "age"]

console.log('====================================');
console.log('Person getOwnPropertyNames: ', Object.getOwnPropertyNames(Person.prototype));   //Person getOwnPropertyNames:  (4) ["constructor", "name", "age", "sayName"]
console.log('====================================');

console.log('====================================');
console.log('person1 getOwnPropertyNames : ', Object.getOwnPropertyNames(person1));
console.log('====================================');