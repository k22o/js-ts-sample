/********************
 * テンプレートリテラル
*********************/
// 変数を直接書くことができる
const myName = "Mike";
console.log (`Hello, I'm ${myName}`)

// タグ付きテンプレートリテラル
function bold (strings, ...values) {
    return strings.reduce((prev, current) => {
      return prev + current + (values.length ? "<b>" + values.shift() + "</b>" : "");
    }, "");
  }  
const like = "abc";
const dislike = "def";
console.log(bold`I like ${like} and I hate ${dislike}.`);

/*****************
 * 数値セパレータ
******************/
const num = 123_456 // 桁区切りを表現するのに、,のかわりに_を使う
console.log(num) // 123456


/*************************
 * 関数リテラルとアロー関数
*************************/
const add1 = function(n1, n2) { 
  return n1 + n2;
}
let add2 = (n1, n2) => {
  return n1 + n2;
}

/*************************
 * オブジェクトリテラル
*************************/
const title = "abc"
const author = "Alice"
// 以下2つは等価
const bookObj = {title, author}
const bookObj2 = {title: title, author: author}
