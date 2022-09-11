/* 関数incrementは、countを変数として持っていないが、
createCounter内で定義されているため、使うことができる。
すなわち、「incrementの変数として内部には定義されていないが、
前後のコンテキストによってcountが利用できている」状態で、
これのような関数とコンテキストによって定められる特殊なオブジェクト
形体をclosureと呼ぶ。
*/


function createCounter() {
    let count = 0;
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}

const myCounter = createCounter();
myCounter(); // => 1
myCounter(); // => 2

const newCounter = createCounter();
newCounter(); // => 1
newCounter(); // => 2

console.log(myCounter()); // => 3
console.log(newCounter()); // => 3
