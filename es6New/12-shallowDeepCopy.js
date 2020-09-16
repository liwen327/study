//实现浅拷贝与深拷贝的几种方式

//Object.assign()是浅拷贝
var obj1 = {
  a: {
    b: 1
  },
  sym: Symbol(1)
};
Object.defineProperty(obj1, 'innumerable', {
  value: '不可枚举属性',
  innumerable: false
});

var obj2 = {};
Object.assign(obj2, obj1)
obj1.a.b = 2;
console.log('obj1:', obj1);
console.log('obj2:', obj2);



/* //扩展运算符  可以实现简单的对象的深拷贝
var obj1 = {
  a: 1,
  b: { c: 1 }
}
var obj2 = { ...obj1 }
obj1.a = 2
console.log('obj1:', obj1);   //obj1:{a:2,b:{c:1}}
console.log('obj2:', obj2);   //obj1:{a:1,b:{c:1}}  当改变的是obj1.a时，这里还可以让obj1和obj2不一样，因为a是一个值，是一个基本类型，存储在栈中，而不是堆中

obj1.b.c = 2
console.log('obj1:', obj1);   //obj1:{a:2,b:{c:2}}
console.log('obj2:', obj2);   //obj1:{a:1,b:{c:2}}  当改变obj1.b.c时，因为b是一个引用类型的，是存储在堆中的 */



/* //使用JSON.stringify实现深拷贝
var obj1 = {
  a: 1,
  b: [1, 2, 3]
}

var str = JSON.stringify(obj1);
var obj2 = JSON.parse(str);
obj1.a = 2;
obj1.b.push(4)
console.log('obj1:', obj1);   //obj1:{a: 2, b: [1, 2, 3, 4]}
console.log('obj2:', obj2);   //obj2:{a: 1, b: [1, 2, 3]}    obj1的值与obj2不一样，所以就实现了简单的深拷贝
 */
















