var Goods = (function () {
    function Goods(name, price) {
        this.genre = "";
        this.name = name;
        this.price = price;
    }
    Goods.prototype.priceIncludeTax = function () {
        return (Goods.tax + 1) * this.price;
    };
    Goods.tax = 0.08;
    return Goods;
}());
var apple = new Goods("apple", 100);
console.log(apple.priceIncludeTax());
var Goods2 = (function () {
    function Goods2(name, price) {
        this._name = name;
        this.price = price;
    }
    Object.defineProperty(Goods2.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goods2.prototype, "setPrice", {
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    return Goods2;
}());
var apple2 = new Goods2("apple", 100);
console.log(apple2.name);
apple2.setPrice = 300;
console.log(apple2);
var Teacher = (function () {
    function Teacher(name, gender, age) {
        this.gender = gender;
        this.age = age;
        this.name = name;
    }
    Teacher.prototype.printProfile = function () {
        console.log(this.name + " " + this.age);
    };
    return Teacher;
}());
var teacher = new Teacher("taro", "male", 30);
teacher.printProfile();
var Admin = (function () {
    function Admin(id) {
        this.id = id;
    }
    Admin.getInstance = function (id) {
        if (!this._insatance) {
            this._insatance = new Admin(id);
        }
        return this._insatance;
    };
    return Admin;
}());
var admin1 = Admin.getInstance(1);
var admin2 = Admin.getInstance(2);
console.log(admin1);
console.log(admin2);
var errorMessage = {
    404: "not found",
    502: "bad gateway"
};
console.log(errorMessage);
