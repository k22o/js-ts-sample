/*************************************************** */
// ジェネリクス
// 予め、型を指定しておくことで、違う型のデータが入った際には、コンパイルエラー
type StringArr = Array<string>;
const arr1: StringArr = ["a", "b", "c"];
console.log(arr1);

/*************************************************** */
// 型をTとする。制限したい場合は、extendsを利用できる
function printInfo<T extends object>(obj: T) {
    console.log(obj);
}
const obj1 = {name: "name", age: 20};
printInfo(obj1);

/*************************************************** */
// key指定の場合の特殊な書き方
function printValue<T extends object, U extends keyof T>(obj: T, key: U) {
    console.log(obj[key]);
}
const obj2 = {name: "name", age: 20};
printValue(obj2, "name");


/*************************************************** */
// classにも
class ItemStorage<T> {
    private data: T[] = [];

    pushItem(item: T) {
        this.data.push(item);
    }

    printItem() {
        console.log(this.data);
    }
}

const itemStorage: ItemStorage<number> = new ItemStorage();
itemStorage.pushItem(3);
itemStorage.printItem();