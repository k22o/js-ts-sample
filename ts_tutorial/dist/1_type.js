"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
function printString(arrs) {
    for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
        var arr = arrs_1[_i];
        console.log(arr);
    }
}
printString(["hoge", "huga"]);
function printTuple(tpl) {
    console.log(tpl[0]);
}
printTuple(["abc", 1]);
var obj = {
    name: "abc",
    tpl: ["abc", 1]
};
console.log(obj);
var Janken;
(function (Janken) {
    Janken[Janken["ROCK"] = 0] = "ROCK";
    Janken[Janken["SCISSORS"] = 2] = "SCISSORS";
    Janken[Janken["PAPER"] = 5] = "PAPER";
})(Janken || (Janken = {}));
console.log(Janken.PAPER);
function checker(val) {
    console.log(val);
}
checker(true);
checker(1);
var se = "spring";
console.log(se);
function add2(a, b, cb) {
    var result = a + b;
    cb(result);
}
add2(2, 3, function (result) { return console.log(result); });
function printNumber(a, b) {
    console.log(a);
    console.log(b);
}
printNumber(1, 2);
printNumber(1);
var listObj = {
    title: "title",
    genre: "genre",
    price: 123
};
console.log(listObj);
var groupVal = "123";
console.log(groupVal);
var longObj = {
    id: 1,
    name: "name",
    content: {
        genre: "genre"
    }
};
console.log(longObj.content.genre);
var str1 = null;
var str2 = str1 !== null && str1 !== void 0 ? str1 : "default";
console.log(str2);
