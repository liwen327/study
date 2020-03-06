function curry() {
  let argsList = [...arguments]
  let fn = function () {
    argsList.push(...arguments)
    return fn
  }

  fn.sumOf = () => argsList.reduce((a, b) => a + b)
  return fn
}


let sum1 = curry()
let sum2 = curry()
let sum3 = curry()

console.log(sum1(1, 2, 3).sumOf());   //6
console.log(sum2(1)(2)(3).sumOf());   //6
console.log(sum3(1, 2)(3).sumOf());   //6

//上面三个为什么都打印6   不理解啊，就是单纯的求和吗？干嘛要写那么复杂

let arr = [1, 2, 3]
function getSum(total, num) {
  return total + num;

}

console.log(arr.reduce(getSum))   //6     不是这样简单也实现了吗？为什么要那么复杂











