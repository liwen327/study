//使用exports.add的方式导出的引入方式
/*
const myModule = require('./01-module_exports')
console.log('====================================');
console.log('add :', myModule.add(1, 2));
console.log('===================================='); */


//使用module.exports.add 的方式导出的引入方式
const { add } = require('./01-module_exports')
console.log('add:', add(1, 2));

















