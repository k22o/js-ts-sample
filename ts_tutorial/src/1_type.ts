/*************************************************** */
/** primitive型
 * boolean型
 * number型 
 * string型
 * undefined型: 値が未定義であることを表す型。
 * null型: 値がないことを表す型。
 * symbol型(シンボル型): 一意で不変の値。
 * bigint型(長整数型): 9007199254740992nのようなnumber型では扱えない大きな整数型。
 */

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2,4));

/*************************************************** */
// その他の型

// (1) any
function disp(a: any): void {
    console.log(a)
}

// (2) never型
// 以下のように絶対に何も返らない場合に使う
function throwError(): never {
    throw new Error();
}

// (3) unknown型
// anyと違って、unknown型に代入したオブジェクトのプロパティ、メソッドは使用や実行ができない。
// anyより安全な不明型


/*************************************************** */
// 配列

let array: number[];
array = [1,2,3];
console.log(array[0])
let array2: readonly number[] = [100, 200, 300];


/*************************************************** */
// tuple: いろいろな型をひとまとめに
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
// リテラル型 : 限られた値だけ許容
let riteralSample: -1 | 0 | 1;
riteralSample = 0;
console.log(riteralSample);

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

type List = (string | number)[];

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
// type (型エイリアス) を&で繋ぐ (intersection型)

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
// こんなかんじで書けば、無い時点でも実行時エラーにならない (Optional Chain)
// nullやundefinedのチェックがいらない

const str1 = null;
const str2 = str1 ?? "default"; // nullやundefindの場合にdefault表示
console.log(str2);

/************************************************** */
// Conditional Type

type If<bool, T, U> = bool extends true ? T : U;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

/************************************************** */
// Infer

type ArrayItem<T> = T extends (infer R)[] ? R : never
type Foo = ArrayItem<string[]> // string


/************************************************** */
// 型Assertion: 型推論を上書きする

const value: string | number = "this is a string";
const strLength: number = (value as string).length;
