// テンプレートリテラル
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
