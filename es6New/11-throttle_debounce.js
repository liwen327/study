/* var processor = {
  timeoutId: null,
  //实际进行处理的方法
  performProcessing: function () {
    //实际执行的代码
  },
  //初始处理调用的方法
  process: function () {
    clearTimeout(this.timeoutId);
    var that = this;
    this.timeoutId = setTimeout(function () {
      that.performProcessing()
    }, 100)
  }

}

//尝试开始执行
processor.process() */

/**
 * 防抖   是在输入框输入内容时，在不超过时间间隔时不会去打印或请求接口，超过时间间隔再去请求
 * 其实质是多个事件触发时，防抖只触发最后一次打印或请求接口
 *
 * 参考链接：https://juejin.im/post/5b8de829f265da43623c4261
  */



//模拟一段ajax请求   没用防抖函数之前，每输入一个字母都会打印，极大的浪费浏览器资源
/* function ajax(content) {
  console.log('ajax request ' + content)
}

let inputa = document.getElementById('unDebounce')

inputa.addEventListener('keyup', function (e) {
  ajax(e.target.value)
}) */

//在实际的应用中，用户往往时输入完成时再去请求接口，下面利用防抖优化一下
//模拟一段ajax请求
function ajax(content) {
  console.log('ajax request ' + content)
}

function debounce(fun, delay) {
  var timer
  return function (args) {
    let that = this
    let _args = args
    // console.log('args: ', args);
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}

let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 2000)

inputb.addEventListener('keyup', function (e) {
  debounceAjax(e.target.value)
})




/**
 * 节流：为了限制函数每段时间内只执行一次，而防抖是让函数只执行最后一次。
 * 像频繁的拖动浏览器的窗口大小，使得某个div的宽度和高度相同时
 */

function throttle(fn, delay) {
  var timer;
  return function (args) {
    var that = this;
    var _args = args;
    if (timer) {
      return;   //在delay的时间之内被触发，则直接退出
    }
    timer = setTimeout(function () {
      fn.call(that, _args)
    }, delay)
  }
}
function foo(content) {
  console.log(content);
}

var throttleFn = throttle(foo, 2000);
document.onmousemove = function () {
  throttleFn('throttle测试')
}



//节流  每隔一段时间执行一次，常用于1.谷歌搜索：搜索联想功能 2. 提交按钮重复点击提交 3. 滚动加载
function throttle(fn, delay) {
  var timer;
  if (timer) {
    return;
  }
  return function (args) {
    var that = this;
    var _args = args;
    timer = setTimeout(function () {
      fn.call(that, _args)
    }, delay)
  }
}

//防抖   只在最后一次才执行。常用于：1. 输入框的input事件中的接口调用。 2. 拖拽窗口时resize，防止重复渲染。3.邮箱、手机号校验
function debounce(fn, delay) {
  var timer;
  if (timer) {
    clearTimeout(timer)
  }
  return function (args) {
    var that = this;
    var _args = args;
    timer = setTimeout(function () {
      fn.call(that, _args)
    }, delay)
  }

}


