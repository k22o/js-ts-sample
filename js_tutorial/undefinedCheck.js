/*******************************
 * optional chain
 * = null/undefinedのエラー回避
********************************/
const str = null
console.log(str?.substring(2)) // undefined

const obj1 = {
    name: "Yamada",
    sex: "male",
}
console.log(obj1.address?.city) // undefined


/*******************************
 * null合体演算子
 * = null/undefinedのチェック
********************************/
const str2 = undefined
console.log(str2 ?? "default") // default