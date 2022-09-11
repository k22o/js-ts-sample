/*
iterator
以下2つのプロパティを返すnextメソッドにより、イテレータ機能を実装するオブジェクト
- value: nextで取り出される値
- done: 最後の値が返されている場合にtrueを返す
*/

let obj1 = {
    count: 0,
    next: function() {
        this.count ++ 
        return (this.count <= 3) 
        ? {value: this.count, done:false} 
        : {done: true};
    }
}
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());

/*
iterableなObject 
イテレータを持つオブジェクト、すなわち、
[Symbol.iterator]() でイテレータを返すもの
*/
let iterFunc = function(){};
iterFunc.prototype[Symbol.iterator] = function() {
    return {
        count: 0,
        next: function() {
            this.count ++;
            return (this.count <= 3) 
            ? {value:this.count , done:false }
            : {done:true};
        }
    }
};
let obj2 = new iterFunc();
for (x of obj2) console.log(x);

/*
配列, mapはデフォルトでイテレータが設定されている。
すなわち、prototypeで上書きすれば、異なる機能のイテレータを設定できる。
for-ofなどでは、イテレータのvalueのみを返してくれる
*/
const obj3 = ["a", "b", "c"];
for (x of obj3) console.log(x);


///////////////////////////////////////////////////////////////

/*
generator
- 一度脱出した後も値を保持し、再度利用できる
- yieldで値を返す
- generatorもiteratorの1種
- iteratorを自前で実装するよりもgeneratorを使う方が楽。
*/

function * printf3Num(num) {
    for(let i=0; i<3; i++) {
        yield num + i;
    }
}

const gen = printf3Num(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
for(let x of printf3Num(100)) console.log(x);
console.log([...printf3Num(10)])