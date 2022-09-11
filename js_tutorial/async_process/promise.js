// promiseを使うことで、callback関数が入れ子になることをさけることができる
// method chainみたいな感じで使える

// promiseは、resolve内の値を返す
// rejectで強制失敗。
var p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Hello World");
        //reject("Hello World");
    }, 100);
});

// promiseの値を受け取った後の処理。
// .then(success, fail)
p1.then((value) => {
    console.log(`.then() success : ${value}`);
}, (error) => {
    console.log(`.then() fail : ${erroe}`);
});
  
// promiseのerrorを受け取ったとき
p1.catch((error)=>{
    console.log(`.catch() onrejected : ${error}`);
});