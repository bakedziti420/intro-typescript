var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing...");
    };
    return Person;
}());
var bran = new Person("Bran");
bran.dance();
var CoolPerson = (function (_super) {
    __extends(CoolPerson, _super);
    function CoolPerson() {
        return _super.apply(this, arguments) || this;
    }
    CoolPerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("awesomely!");
    };
    return CoolPerson;
}(Person));
var robb = new CoolPerson("Robb");
robb.dance();
