/**
 * Created by liwz on 17-2-06.
 */
//import './Greeter.js';
//         console.log(/^\u{3}$/.test('uuu'));
//         console.log(/^\u{3}$/u.test('uuu'));
//         //console.log(/^\u{3}$/u.test('&#117;'));
//         console.log(/\u{61}$/u.test('a'));
//         console.log(/\u{20BB7}$/u.test('𠮷'));
//
//         console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
//         console.log(/^\uD83D/.test('\uD83D\uDC2A'));

//y修饰符
const REGEX = /a/g;

//指定从2号位置开始匹配
REGEX.lastIndex = 2;

//匹配成功
const match = REGEX.exec('xaya');
console.log(match);