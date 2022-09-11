

// JSON -> object
let json = "{ \"id\": 1, \"name\": \"js-primer\" }";
let obj = JSON.parse(json);
console.log(obj.id);
console.log(obj.name);


// object -> json
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};

obj = { id: 1, name: "js-primer", tag: null };
json = JSON.stringify(obj, replacer);
console.log(json);

// replacer引数に配列を渡した場合はその配列に含まれる名前のプロパティだけが変換。
const replacer2 = ["id", "name"];
json = JSON.stringify(obj, replacer2);
console.log(json);

// 第三引数...変換後のスペース調整
obj = { id: 1, name: "js-primer" };
json = JSON.stringify(obj, null, "\t");
console.log(json);

