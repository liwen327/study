
/*
//js的方法reduce 会从左到右依次计算  此例为求和
let arr = [1, 2, 3]
function getSum(total, num) {
  return total + num
}

console.log('reduce', arr.reduce(getSum)); */



function f1(arg) {
  console.log('f1', arg);
  return arg;

}

function f2(arg) {
  console.log('f2', arg);
  return arg;

}

function f3(arg) {
  console.log('f3', arg);
  return arg;

}

//compose函数实现f1的返回值是f2的参数，f2的返回值是f3的参数
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  else if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))   //不理解，这是为什么
}


console.log('compose', compose());  //不传入参数
/* //传入一个参数
打印：f1 omg
     compose omg
*/
console.log('compose', compose(f1)('omg'));

console.log('compose', compose(f1, f2, f3)('omg'));
