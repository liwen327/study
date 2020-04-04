/* const add = (a,b) => {

  return a + b;
} */
//通过exports.add的方式导出add函数
// exports.add = add;
/* exports.add = (a, b) => {
  return a + b;

} */
const add = (a, b) => {
  return a + b;
}
module.exports.add = add;

