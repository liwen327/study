//面试题：写一个promise，让其1s时打印1000，2s时打印2000,3s时打印3000
/* const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log(1000);
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2000);
  }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3000);
  }, 3000)
})
Promise.all([promise1, promise2, promise3]) */



/* const promise = new Promise((resolve, reject) => {
  if (异步获取数据成功) {
    resolve(value)
  } else {
    reject(error)
  }

}) */


/* function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(100).then((value) => {
  console.log('====================================');
  console.log(value);   //done
  console.log('====================================');
})

//异步加载图片的例子
function loadImgAsync(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error('不能加载图片' + url))
    }
    img.src = url;
  })
}

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
}); */


//promise.race()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  // 假设500毫秒后网络超时
  setTimeout(() => {
    reject("超时了");
  }, 500);
});

const promiseRace = Promise.race([promise1, promise2, promise3]);
promiseRace
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    // 谁执行块，就返回谁
    console.log("fail", e);
  });


//promise.reject()
Promise.reject("rejected")
  .then((res) => {
    console.log('value', res);
  })
  .catch((reason) => {
    // reason rejected
    console.log('reason', reason);
  });



