"use strict";
var arr1 = ["a", "b", "c"];
console.log(arr1);
function printInfo(obj) {
    console.log(obj);
}
var obj1 = { name: "name", age: 20 };
printInfo(obj1);
function printValue(obj, key) {
    console.log(obj[key]);
}
var obj2 = { name: "name", age: 20 };
printValue(obj2, "name");
var ItemStorage = (function () {
    function ItemStorage() {
        this.data = [];
    }
    ItemStorage.prototype.pushItem = function (item) {
        this.data.push(item);
    };
    ItemStorage.prototype.printItem = function () {
        console.log(this.data);
    };
    return ItemStorage;
}());
var itemStorage = new ItemStorage();
itemStorage.pushItem(3);
itemStorage.printItem();
