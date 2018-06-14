let x = 1;
function f(x,y=x){
  console.log(y);
}
f(2);  //2

/*let x = 1;
function f(y=x){
  let x = 2;
  console.log(y);
}
f();*/


let foo = 'outer';
function bar(func = () => foo){
  let foo = 'inner';
  console.log(func());
}
bar();

