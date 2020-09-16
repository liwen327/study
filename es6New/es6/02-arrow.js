function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id: ", this.id);

      }
    }
  }
}
var f = foo.call({ id: 1 });
var f1 = f.call({ id: 2 })()();  //{id:1}
var f2 = f().call({ id: 3 })();  //{id:1}
var f3 = f()().call({ id: 4 });  //{id:1}


var button = document.getElementById("press");
button.addEventListener('click', () => {
  this.classList.toggle('on');
})


var obj = {
  getArrow() {
    return () => {
      console.log(this === obj);
    }
  }
}
