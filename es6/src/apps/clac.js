/**
 * Created by liwz on 16-12-28.
 */
//import './Greeter.js';
        // class Calc1{
        //     constructor(){
        //         console.log("calc constructor");
        //     }
        //     add(a,b){
        //         return a + b;
        //     }
        // }
        // var c = new Calc1();
        // console.log(c.add(4,5));
        // 
        // 
console.log("es6");
//var str = dlUrl || 'download.csdn.net';
var str = typeof dlUrl == 'undefined' ? 'dwonload.csdn.net' : dlUrl;
console.log(str);

function log(x,y='world'){
        console.log(x,y);
}
log('hello');  
log('hello','China');
log('hello','');