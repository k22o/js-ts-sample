// オブジェクトのコピー・結合の仕方

let obj1 = {a:1, b:2, c:3};
let obj2 = {d:1};

// これだと、オブジェクトが一緒にならない
let result1 = {obj1, obj2}
console.log(result1)

// スプレッド構文を利用すると結合できる
let result2 = {...obj1, ...obj2}
console.log(result2)

// Object.assignでも同じことができる
let result3 = Object.assign(obj1, obj2);
console.log(result3)

// Object.assignは値のコピーにも利用できる
// これは参照渡し的な挙動になる
let objCopy = Object.assign(obj1);
obj1.a = 100;
console.log(objCopy)