var a = 'aa';
function foo(b, c) {
  var a = 'aaa';
  var a = 'aaaa'
  console.log('a:', a);
  console.log('arguments:', arguments);


}
foo()