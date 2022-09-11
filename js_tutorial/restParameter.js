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