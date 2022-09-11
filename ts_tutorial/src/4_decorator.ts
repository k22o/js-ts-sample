// decorator : @でいろいろできる
// decorator factory: decoratorに変数を渡して汎用的に使える

/*************************************************** */
// class decorator
// target: 対象となるクラスのコンストラクタ
// コンストラクタに諸々の設定をしたり、置き替えたりできる。

function classDeco(constructor:any): any {
    return class extends constructor {
        addPropr = "addProp";
    }
}

@classDeco
class DecoratorSample {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}

console.log(new DecoratorSample(10));

/*************************************************** */
// method decorator

// target: 対象となるメソッド本体
// target: 対象となるクラスのコンストラクタ
// propertyDescriptor: 対象メソッドのプロパティ

// 結果が－なら、指定した値に変更するように関数を上書きする
function methodDeco(valueWhenMinus: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const getFunc = descriptor.value;
        descriptor.value = function() {
            const data = getFunc.apply(this);
            return data < 0 ? valueWhenMinus : data;
        }
    }
}

class DecoratorSample2 {
    num :number;

    constructor(num: number) {
        this.num = num;
    }

    @methodDeco(999)
    getValue() {
        return this.num;
    }
}

console.log(new DecoratorSample2(10).getValue());
console.log(new DecoratorSample2(-1).getValue());

/*************************************************** */
// access decorator : getやsetに対して
// target: 対象となるクラスのコンストラクタ
// propertyKey: 対象となるメソッド名
// propertyDescriptor: 対象メソッドのプロパティ

// 結果が－なら、指定した値に変更するようにgetterを上書きする
function accessDeco(valueWhenMinus: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const origAccessor = descriptor.get;
        descriptor.get = function() {
            const result = origAccessor?.apply(this);
            return result < 0 ? valueWhenMinus : result;
        }
    }
}

class DecoratorSample3 {

    private _num :number;

    constructor(num: number) {
        this._num = num;
    }

    @accessDeco(999)
    get num() {
        return this._num;
    }
}

console.log(new DecoratorSample3(10).num)
console.log(new DecoratorSample3(-1).num)


/*************************************************** */
// property decorator : property(メンバ変数)に対して
// target: 対象となるクラスのコンストラクタ
// memberName: 対象となるプロパティ名


// 結果が－なら、指定した値に変更するようにgetterを上書きする
function propertyDeco(valueWhenMinus: number) {    
    return function(target: any, memberName: string) {

        let value: number = target[memberName];
        // このプロパティを設定する
        Object.defineProperty(target, memberName, {
            get: function() {
                return value;
            },
            set: function(inputValue: number) {
                value = inputValue < 0 ? valueWhenMinus : inputValue;
            }
        })
    }
}

class DecoratorSample4 {

    @propertyDeco(999)
    num = 0;

    setNum(num: number) {
        this.num = num;
    }

}

const decoSample4 = new DecoratorSample4();
decoSample4.setNum(100);
console.log(decoSample4.num);
decoSample4.setNum(-1);
console.log(decoSample4.num);

/*************************************************** */
// parameter decorator : methodのパラメータに対して


