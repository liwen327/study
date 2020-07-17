//函数没有重载
function add(num) {
  return num + 100;
}

function add(num) {
  return num + 200;
}

console.log(add(100));  //300
