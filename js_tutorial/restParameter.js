// 残余引数
// 引数がまとめて配列に

function printNumber(...numbers) {
    for(let number of numbers) {
        console.log(number);
    }
}

printNumber("a", "bc", "def")

function printAny(...values) {
    for(let value of values) {
        console.log(value);
    }
}

printAny(false, "123", 1.23)

// 残余引数を利用した分割代入
let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);