"use strict";function log(o){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"world";console.log(o,l)}function f(o){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;console.log(l)}function bar(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return l},l="inner";console.log(o())}console.log("es6");var str="undefined"==typeof dlUrl?"dwonload.csdn.net":dlUrl;console.log(str),log("hello"),log("hello","China"),log("hello",""),console.log(11);var x=1;f(2);var foo="outer";bar();var REGEX=/a/g;REGEX.lastIndex=2;var match=REGEX.exec("xaya");console.log(match),console.log("na".repeat(3));