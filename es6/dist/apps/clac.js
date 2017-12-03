"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by liwz on 16-12-28.
 */
//import './Greeter.js';
var Calc1 = function () {
    function Calc1() {
        _classCallCheck(this, Calc1);

        console.log("calc constructor");
    }

    _createClass(Calc1, [{
        key: "add",
        value: function add(a, b) {
            return a + b;
        }
    }]);

    return Calc1;
}();

var c = new Calc1();
console.log(c.add(4, 5));