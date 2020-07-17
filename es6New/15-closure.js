var foo = function () {
  var bar = function () {
    var local = 'local scope';
    return function () {
      return local;
    }
  }
  var baz = bar();
  console.log(baz());

}
foo()
