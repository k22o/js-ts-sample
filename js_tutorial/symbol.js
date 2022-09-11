// symbolはプリミティブ型でobjectではない
// 生成したsymbolは固有の識別子を有する
// console.logできない (表示する値がないため)
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 == symbol2);


// デバッグなどで用いるための説明用の文字列、descriptionを設定できる
const symbol3 = Symbol("description");
console.log(symbol3.description);

// プロパティ名としてSymbolを利用する
// 例えば、obj1を別のファイルでも利用したいが、そちらではval2を使わせたくない場合
// val2を普通に書くと他のファイルでも使えてしまう
// Symbolを使えば、symbolの定義されたこのファイルでしか利用できなくなる
const obj1 = {
    val1: 2,
}
const val2 = Symbol("value2");
obj1[val2] = 3;
console.log(obj1.val1);
console.log(obj1[val2]);

// Globalシンボル
// descriptionが同じでも、シンボルは別物と区別される
// 同一のdescriptionの場合に同一のシンボルとみなしたい場合は次のように書く
// シンボルを保存しているレジストリ―にアクセスして、該当のkeyのシンボルを返してくれる
const sameSymbol1 = Symbol.for("sameSymbol");
const sameSymbol2 = Symbol.for("sameSymbol");
console.log(sameSymbol1 == sameSymbol2);
console.log(Symbol.keyFor(sameSymbol1));

// Well-Known-Symbol
// 予め定められたいくつかのSymbolを使って、機能を上書きできる
// たとえば、replaceやiteratorなど。
let replaceDot = {}
replaceDot[Symbol.replace] = (str) => {
    let ansStr = "";
    for(let i=0; i<str.length; i++ ) ansStr = ansStr + "."
    return ansStr;
}
console.log("abc".replace(replaceDot));
