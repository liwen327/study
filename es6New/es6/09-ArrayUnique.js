
/**
 * 数组去重的方法总结：
 * author:liwz
 * modified by liwz at 2020.08.13
  */

//1. es6的new Set()方法去重
function unique1(arr) {
  return Array.from(new Set(arr))
}
console.log('unique1: ', unique1([1, 1, 2, 2, 3, 3, true, true, false, 'a', 'a', undefined, NaN, NaN, null, null, {}, {}]));
//[1, 2, 3, true, false, "a", undefined, NaN, null, {…}, {…}]  空对象{}没有去重

//2. es5常用的两个for循环调用的方法，外层循环是i，内层循环是i+1，判断紧挨的两个值是否相同，如果相同就用splice去掉。
function unique2(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--;     //重要，写的时候不要忘记了
      }
    }
  }
  return arr;
}

console.log('unique2: ', unique2([2, 2, 3, 3, 4, 4, true, false, 'a', 'a', true, undefined, undefined, NaN, NaN, null, null, {}, {}]));
//[2, 3, 4, true, false, "a", undefined, NaN, NaN, null, {…}, {…}]   NaN和空对象没有去重

//3. 利用indexOf,新建一个数组，如果array.indexOf(arr[i])===-1，那把这个元素push进array
function unique3(arr) {
  if (!Array.isArray(arr)) {
    console.log('Type error');
    return;
  }
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.indexOf(arr[i]) === -1) {
      Array.push(arr[i])
    }
  }
  return array;
}
console.log('unique2: ', unique2([2, 2, 3, 3, 4, 4, true, false, 'a', 'a', true, undefined, undefined, NaN, NaN, null, null, {}, {}]));
//[2, 3, 4, true, false, "a", undefined, NaN, NaN, null, {…}, {…}]   NaN和空对象没有去重



















