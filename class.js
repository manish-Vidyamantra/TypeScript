"use strict";
// class Student {
//     //name = 'Manish Kumar Prasad';
//     name;
//     constructor(name) {
//         this.name = name;
//     }
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
exports.__esModule = true;
//     getName() {
//         console.log(this.name);
//     }
// }
// let student1 = new Student("manish");
// student1.getName();
// export {};
var Parent = /** @class */ (function () {
    function Parent(state) {
        this.state = state;
    }
    Parent.prototype.getState = function () {
        return this.state;
    };
    return Parent;
}());
var Chield = /** @class */ (function (_super) {
    __extends(Chield, _super);
    function Chield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chield;
}(Parent));
var p1 = new Parent("Bihar");
var c1 = new Chield("Bihar");
console.log(c1.getState());
