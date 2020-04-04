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

//防抖   是在输入框输入内容时，在不超过时间间隔时不会去打印或请求接口，超过时间间隔再去请求  参考链接：https://juejin.im/post/5b8de829f265da43623c4261

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
  return function (args) {
    let that = this
    let _args = args
    // console.log('args: ', args);

    clearTimeout(fun.id)
    fun.id = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}

let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 500)

inputb.addEventListener('keyup', function (e) {
  debounceAjax(e.target.value)
})


// setInterval(debounce(boom,2000),1000) 根本就没有执行，因为间隔是2s，而执行只需要1s，每次去打印时定时器都会重新计时

let biu = function () {
  console.log('biu biu biu', new Date().Format('HH:mm:ss'))
}

let boom = function () {
  console.log('boom boom boom', new Date().Format('HH:mm:ss'))
}


setInterval(debounce(biu, 500), 1000)
setInterval(debounce(boom, 2000), 1000)









