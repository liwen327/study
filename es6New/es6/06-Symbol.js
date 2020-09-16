/* let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log("s1: ", s1);
console.log("s2: ", s2);
console.log("s1 toString: ", s1.toString());


let sym = Symbol('foo');
// console.log('mySymbol' + sym);  //Uncaught TypeError: Cannot convert a Symbol value to a string

console.log('description: ', sym.description);  //foo

const mySymbol = Symbol();
const a = {};

a.mySymbol = 'hello';
console.log(a[mySymbol]);
console.log(a['mySymbol']); */

//symbol还可以定义一组常量，保证这些常量的值都是不相等的
const log = {}

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info')
}

console.log('debug: ', log.levels.DEBUG);
console.log('info: ', log.levels.INFO);

const obj = {}
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'world';

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log('objectSymbols: ', objectSymbols);



