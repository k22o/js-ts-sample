/*************************
 * 分割代入・残余引数 (配列)
 *************************/
const list1 = [10, 20, 30]
const [a, b, c] = list1 // a=10, b=20, c=30
const [d, ...rest] = list1 // d=10, rest = [10,20]


/****************************
 * 分割代入・残余引数 (Object)
 ****************************/
const objPerson = {
    name: "Alice",
    sex: "female",
    age: 30,
    address: {
        pref: "tokyo",
        city: "chiyoda"
    }
}
// 分割代入,　初期値の設定
const {name, sex, age="---"} = objPerson;
// 変数名の変更
const {sex:gender} = objPerson;
console.log(gender) // female
// 残余引数
const {name2, ...rest2} = objPerson; // Alice, {sex:"female", (あとは略)}
// 入れ子objectの展開
const {address: {city}} = objPerson;


/********************************
 * object引数の分解渡し
 * = objの一部の値だけを引数で取る
 ********************************/
function printPersonalInfo({name, age}) {
    console.log(`name: ${name}, age:${age}`)
}
printPersonalInfo(objPerson)


/****************************
 * 可変長引数
 ****************************/
function printNumber(...numbers) {
    for(let number of numbers) {
        console.log(number);
    }
}
printNumber(10, 20, 30)


/****************************
 * スプレッド構文
 * = 引数でつかう"...""
 ****************************/
printNumber(...[10, 20, 30])

const obj1 = {a:1, b:2, c:3}
const obj2 = {d:4}
console.log({...obj1, ...obj2}) // spread構文を使ったobjの結合
console.log(Object.assign(obj1, obj2)) // これと同値 (参照渡しになる)
