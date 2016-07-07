/**
 * Created by liwz on 15-10-19.
 */
define(function(require,exports,module)
{
    //require("./js/module4.js");
    var a = require('./module4.js').a;   //当引入的是sea下面的模块的时候，那么require执行完的结果就是exports
    function show()
    {
        alert(a);
    }
    exports.show = show;
});