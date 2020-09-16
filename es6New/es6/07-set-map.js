//1.set的基本用法
/* const set = new Set();

[1, 1, 2, 2, 3, 4, 4].forEach(item => {
  set.add(item);
})

for (let i of set) {
  console.log('i: ', i);
} */


/* const set = new Set([1, 1, 2, 2, 3, 5]);
console.log([...set]);   //[1,2,3,5]
console.log(set.size);    //4

//去除字符串的重复字符
console.log('str: ', [new Set('aabbccdd')]);   //str: [{a,b,c,d}]

console.log('str: ', [...new Set('aabbccdd')].join(''));   //abcd  这里用扩展运算符把对象转为数组，再用数组的join方法连接成字符串
 */

//数组去重
/* function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique([1, 1, 2, 2, 3, 3,true,true,false,false,NaN,NaN,undefined,undefined,{}{}])); */

/**
 * set数据结构的遍历器
 * Set.prototype.keys()  返回键名的遍历器
 * Set.prototype.values()  返回键值的遍历器
 * Set.prototype.entries()  返回键名和键值的遍历器
 * Set.prototype.forEach()  使用回调函数遍历每个成员
*/

/* let set = new Set(['red', 'green', 'blue', 1])

for (let i of set.keys()) {
  console.log('keys: ', i);
}
// keys: red
// keys: green
// keys: blue
// keys: 1


for (let i of set.values()) {
  console.log('values: ', i);
}
// values: red
// values: green
// values: blue
// values: 1

for (let i of set.entries()) {
  console.log('entries: ', i);
}
// entries: ['red','red']
// entries: ['green','green']
// entries: ['blue','blue']
// entries: [1,1]


//Set数据结构默认可遍历，所以可以使用for ...of直接进行遍历
for (let i of set) {
  console.log('for of: ', i);
}
// for of: red
// for of: green
// for of: blue
// for of: 1

//forEach也可以遍历set数据结构
set.forEach((key, value) => {
  console.log(key, ': ', value);
})
// red :  red
//green:  green
//blue :  blue
// 1:  1 */


/**
 * map数据结构
  */

const m = new Map();
const o = { 'p': 'Hello world' };

m.set(o, 'content')
console.log(m.get(o))  //'content'

console.log(m.has(o))   //true

m.delete(o)
console.log(m.has(o))  //false
console.log(m.get(o))   //undefined















