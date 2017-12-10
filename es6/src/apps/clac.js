/**
 * Created by liwz on 16-12-28.
 */
//import './Greeter.js';
        class Calc1{
            constructor(){
                console.log("calc constructor");
            }
            add(a,b){
                return a + b;
            }
        }
        var c = new Calc1();
        console.log(c.add(4,5));