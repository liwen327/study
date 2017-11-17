/**
 * Created by liwz on 2017-8-1.
 */
//require("!style-loader!css-loader!../css/style.css"); //载入style.css
//简写
require("../css/style.css");

document.write("It works.");
document.write(require('./module.js')); //添加模块


