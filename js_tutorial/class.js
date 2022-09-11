class Worker {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    disp() {
        console.log("age: " + this.age);
        console.log("name: " + this.name);
    }
}

class Engineer extends Worker {
    constructor(age, name, major) {
        super(age, name);
        this.major = major;
    }
    disp() {
        super.disp();
        console.log("major: " + this.major);
    }
}


let person1 = new Worker(20, "Yamada");
person1.disp();
let person2 = new Engineer(25, "Tanaka" ,"c++");
person2.disp();

// **************** prototype ***************** //

// prototypeの基本
const myObj = {};
console.log(myObj.toString()); //Object.prototypeから生まれたものは皆toStringを持つ
console.log(Object.prototype.toString()); 
console.log(Object.getPrototypeOf(myObj)); // myObjのprototypeを見る


// thisの使い方
// thisは、それが呼び出された際に呼び出し元を保有していた関数を指す
let callNameFunc = function(){console.log("name: " + this.name)};
let mike = {
    callName: callNameFunc,
    name: "mike"
}
mike.callName();

// callの使い方
// 上記、thisを明示する。つまり、callNameFuncを利用しているうち、"mike"のcallNameFuncを呼び出す
callNameFunc.call(mike);


// newの使い方
// newは、関数をコンストラクタのように利用するための演算子
let Person = function(name) {
    this.name = name;
}
console.log(new Person("Mike"))

// Prototype
// ParentCreateがコンストラクタとして利用される (new される) 際に作成される新しいObject の
// プロトタイプを決めるために、.prototypeは利用される
// 呼び出した関数が存在しない場合に、prototypeに遡って探して利用する仕組みがprotytypechain
function ParentCreate(){}
ParentCreate.prototype.value = 10; 
ParentCreate.prototype.printValue = function() {"value: " + console.log(this.value)}

let parentObj = new ParentCreate(); 
parentObj.printValue();
let childObj = Object.create(parentObj);//parentObjを継承
childObj.printValue();

// setProtype
// Prototypeをくっつける
function ChildCreate(){};
Object.setPrototypeOf(ChildCreate.prototype, ParentCreate.prototype);
let childObj2 = new ChildCreate();
childObj2.printValue();

