/**
 * Created by liwz on 2017-8-24.
 */
//greeter.js
/*var config = require("./config.json");
module.exports = function(){
 var greet = document.createElement("div");
 greet.textContext = config.greetText;
 return greet;
 };*/
/*module.exports = function(){
    console.log("It works.");
    document.write("greeter.js is here.");
    return false;
};*/


import React,{Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render(){
        return(
                <div>
                    {config.greetText}
                </div>
        );
    }
}

export default Greeter
