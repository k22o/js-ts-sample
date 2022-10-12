// class
class Goods {

    static tax = 0.08;

    private name: string;
    private price: number;
    private genre = "";

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // 以下のようにすれば、メンバ変数の定義とコンストラクタをカットできる
    // constructor(private name: string, private maker: string){};

    priceIncludeTax() {
        return (Goods.tax + 1) * this.price;
    }    

}

const apple = new Goods("apple", 100);
console.log(apple.priceIncludeTax());


// class
class Goods2 {

    private _name: string;
    private price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this.price = price;
    }

    // getterで、メンバ変数と同じ名前を付けられない
    // こういうときは、メンバ変数の先頭に_を付けることが多い
    get name() {
        return this._name;
    }

    set setPrice(price: number) {
        this.price = price;
    }
}

const apple2 = new Goods2("apple", 100);
console.log(apple2.name)
apple2.setPrice = 300;
console.log(apple2);


/*************************************************** */
// interface: tsのインターフェースは、変数もメソッドもOK。
interface Person {
    readonly name: string;
    printProfile():void;    
}

class Teacher implements Person {

    name: string;

    constructor(name: string, private gender: string, private age: number) {
        this.name = name;
    }

    printProfile(): void {
        console.log(this.name + " " + this.age);
    }
} 

const teacher = new Teacher("taro", "male", 30);
teacher.printProfile();

/*************************************************** */
// シングルトン

class Admin {

    private id: number;

    private static _insatance: Admin;

    private constructor(id: number) {
        this.id = id;
    }

    public static getInstance(id: number): Admin {
        if(!this._insatance) {
            this._insatance = new Admin(id);
        }
        return this._insatance;
    }
}

const admin1 = Admin.getInstance(1);
const admin2 = Admin.getInstance(2); //上書きされず
console.log(admin1);
console.log(admin2);

/*************************************************** */
// メンバが任意のinterface

interface Message {
    [prop: number]: string;
}

const errorMessage: Message = {
    404: "not found",
    502: "bad gateway"
};
console.log(errorMessage);
