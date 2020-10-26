
/* let proxy = new Proxy({},{
  get:function(target,propKey){
    return 32;
  }
})

console.log(proxy.title);
console.log(proxy.name); */


//proxy可以作为其它对象的原型对象
/* let proxy01 = new Proxy({},{
  get:function(target,propKey){
    console.log('target: ',target);
    console.log('propKey: ',propKey);
    return 35;
  }
})

let obj = Object.create(proxy01)
console.log(obj.time); //35 */


var handler = {
  get:function(target,name){
    if(name === 'prototype' ){
      return Object.prototype
    }
    console.log('target get: ',target);
    return 'Hello '+ name;
  },
  apply:function(target,thisBinding,args){
    console.log('target apply: ',target);
    console.log('args apply: ',args);
    return args[0]
  },
  construct:function(target,args){
    console.log('target construct: ',target);
    return {value:args[1]}
  }
}

let fproxy = new Proxy(function(x,y){
  return x+y;
},handler)
console.log(fproxy(1,2))   //1



