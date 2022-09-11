// List : 存在しない

// Array
let array = new Array(1, 2, "abe");    //arrayの初期化
console.log("length of Array: " + array.length);  //長さ
array.forEach(val=>{console.log(val);});
let array2 = [1,2,3,4,5];
console.log(array2.filter(num => num%2 == 0)); //filterがTrueのもののみ返す
console.log(array2.map(num => num*num)); 
console.log(array2.reduce((prev, next) => prev + next,  0));


// object 
let object = {
    id:1,
    name: "Taro"
};
console.log(object.id + ":" + object.name);


// map
let map = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(map.size);
map.set("key3", "value3");
console.log(map.get("key1")); // => "value1"
console.log(map.has("key1")); // => true

// set
let set = new Set(["value1", "value2", "value2"]);
console.log(set.size)
set.add("value3");
console.log(set.has("value3")); // => true

