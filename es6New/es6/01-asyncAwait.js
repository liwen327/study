/* class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject) {
    const startTime = Date.now();
    console.log('startTime: ', startTime.toLocaleString());
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    );
  }
}

(async () => {
  const sleepTime = await new Sleep(1000);
  console.log(sleepTime);    //1002
})(); */


/* //js的休眠
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval)
  })
}

// 用法
async function one2FiveInAsync() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();   //每隔1s打印一个数字 */



/* //如果await后面的promise对象变为了reject状态，则reject的参数会被catch的回调函数接收到
async function f() {
  await Promise.reject('出错了！')
}
f().then(v => console.log(v))
  .catch(err => console.log(err))  //打印：出错了！ */



/* async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行    因为前面的promise语句状态变成了reject,所以后面的await语句不会执行
} */


//1. 有时我们希望即使前面的异步操作失败了，后面的异步操作也要执行，这时可以把前一个await放在一个try catch中
async function f() {
  try {
    await Promise.reject('出错了')
  } catch (err) {
    console.log('err: ', err);

  }
  return await Promise.resolve('hello world');
}

f().then(v => console.log(v))  //hello world

//2.另一种方法是在await后面的Promise对象跟一个catch方法，处理前面可能出现的错误
async function f() {
  await Promise.reject('出错了！')
    .catch(err => console.log('err: ', err));
  return await Promise.resolve('hello world')
}
f().then(v => console.log(v));





