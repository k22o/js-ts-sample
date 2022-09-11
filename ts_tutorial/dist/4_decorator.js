"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDeco(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.addPropr = "addProp";
            return _this;
        }
        return class_1;
    }(constructor));
}
var DecoratorSample = (function () {
    function DecoratorSample(value) {
        this.value = value;
    }
    DecoratorSample = __decorate([
        classDeco
    ], DecoratorSample);
    return DecoratorSample;
}());
console.log(new DecoratorSample(10));
function methodDeco(valueWhenMinus) {
    return function (target, propertyKey, descriptor) {
        var getFunc = descriptor.value;
        descriptor.value = function () {
            var data = getFunc.apply(this);
            return data < 0 ? valueWhenMinus : data;
        };
    };
}
var DecoratorSample2 = (function () {
    function DecoratorSample2(num) {
        this.num = num;
    }
    DecoratorSample2.prototype.getValue = function () {
        return this.num;
    };
    __decorate([
        methodDeco(999)
    ], DecoratorSample2.prototype, "getValue", null);
    return DecoratorSample2;
}());
console.log(new DecoratorSample2(10).getValue());
console.log(new DecoratorSample2(-1).getValue());
function accessDeco(valueWhenMinus) {
    return function (target, propertyKey, descriptor) {
        var origAccessor = descriptor.get;
        descriptor.get = function () {
            var result = origAccessor === null || origAccessor === void 0 ? void 0 : origAccessor.apply(this);
            return result < 0 ? valueWhenMinus : result;
        };
    };
}
var DecoratorSample3 = (function () {
    function DecoratorSample3(num) {
        this._num = num;
    }
    Object.defineProperty(DecoratorSample3.prototype, "num", {
        get: function () {
            return this._num;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        accessDeco(999)
    ], DecoratorSample3.prototype, "num", null);
    return DecoratorSample3;
}());
console.log(new DecoratorSample3(10).num);
console.log(new DecoratorSample3(-1).num);
function propertyDeco(valueWhenMinus) {
    return function (target, memberName) {
        var value = target[memberName];
        Object.defineProperty(target, memberName, {
            get: function () {
                return value;
            },
            set: function (inputValue) {
                value = inputValue < 0 ? valueWhenMinus : inputValue;
            }
        });
    };
}
var DecoratorSample4 = (function () {
    function DecoratorSample4() {
        this.num = 0;
    }
    DecoratorSample4.prototype.setNum = function (num) {
        this.num = num;
    };
    __decorate([
        propertyDeco(999)
    ], DecoratorSample4.prototype, "num", void 0);
    return DecoratorSample4;
}());
var decoSample4 = new DecoratorSample4();
decoSample4.setNum(100);
console.log(decoSample4.num);
decoSample4.setNum(-1);
console.log(decoSample4.num);
