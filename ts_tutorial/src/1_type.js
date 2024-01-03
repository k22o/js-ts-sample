"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
function disp(a) {
    console.log(a);
}
function throwError() {
    throw new Error();
}
var array;
array = [1, 2, 3];
console.log(array[0]);
var array2 = [100, 200, 300];
function printTuple(tpl) {
    console.log(tpl[0]);
}
printTuple(["abc", 1]);
var obj = {
    name: "abc",
    tpl: ["abc", 1]
};
console.log(obj);
var riteralSample;
riteralSample = 0;
console.log(riteralSample);
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
var value = "this is a string";
var strLength = value.length;
