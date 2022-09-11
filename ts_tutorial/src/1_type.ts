
/*************************************************** */
// 型の指定
function add(a: number, b: number) {
    return a + b;
}
console.log(add(2,4));

/*************************************************** */
// 配列
function printString(arrs: string[]) {
    for (const arr of arrs) {
        console.log(arr);
    }
}
printString(["hoge", "huga"])

/*************************************************** */
// tuple
function printTuple(tpl: [string, number]) {
    console.log(tpl[0]);
}
printTuple(["abc", 1]);

/*************************************************** */
// Objectの型指定 (あんまやらない)
const obj: {
    name: string;
    tpl: [string, number];
} = {
    name: "abc",
    tpl: ["abc", 1]
}
console.log(obj)

/*************************************************** */
// Enum
enum Janken {
    ROCK = 0,
    SCISSORS = 2,
    PAPER = 5
}
console.log(Janken.PAPER);

/*************************************************** */
// Union
// 型や値などをひとまとめに
// aliasとあわせて書くこと多い。
function checker(val: number | boolean) {
    console.log(val);
}
checker(true);
checker(1);

type season = "spring" | "summer" | "autumn" | "winter";
const se: season = "spring";
console.log(se);

/*************************************************** */
// functionの定義
// 関数の引数を以下のように厳密に型指定しておくことが可能

function add2(a: number, b: number, cb: (result: number) => void) {
    const result = a + b;
    cb(result);
}

add2(2, 3, (result) => console.log(result));


/*************************************************** */
// ?をつけると、その引数は無くても怒られない
function printNumber(a: number, b?: number) {
    console.log(a);
    console.log(b);
}
printNumber(1, 2);
printNumber(1);

/*************************************************** */
// typeを&で繋ぐ

type book1  = {
    title: string;
    genre: string;
} 
type book2 = {
    title: string;
    price: number;
}

type book3 = book1 & book2;

const listObj: book3 = {
    title: "title",
    genre: "genre",
    price: 123
} // 和集合
console.log(listObj);

type group1 = string | number;
type group2 = string | boolean;
type group3 = group1 & group2;
const groupVal: group3 = "123"; // 1と2に共通するもの
console.log(groupVal);

/*************************************************** */
// Null check
const longObj = {
    id: 1,
    name: "name",
    content: {
        genre: "genre"
    }
}
console.log(longObj.content.genre);
//console.log(longObj.content.genre?.test?)
// こんなかんじで書けば、無い時点でnullを返してくれるらしい。
// nullちぇっくがいらない

const str1 = null;
const str2 = str1 ?? "default"; // nullやundefindの場合にdefault表示
console.log(str2);