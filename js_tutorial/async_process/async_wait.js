// asyncを付けると、自動的にpromiseを返していることになる
async function msg() {
    return "message";
}

msg().then(value => {
    console.log(value);
});


// async関数の中でのみawaitを使うことができる
// awaitは、指定したpromiseの結果が返るまで待つ
// promiseがないと、先にresultを出力してしまう
async function time_stop() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done"), 1000)
    });
  
    let result = await promise;
    // let result = promise;
    console.log(result);
  }
  
time_stop();