var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stark = (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    return Stark;
}());
Stark.castle = "Winterfell";
var ned = new Stark();
console.log(ned.saying);
ned.saying = "Winter is coming!";
console.log(ned.saying);
ned.hello("Bobert");
console.log("Hello World");
function hello(string) {
    console.log("Hello " + string);
}
hello("universe");
hello(5);
var Person = (function () {
    function Person(name) {
        this.name = name;
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
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
printName({ age: 22 });
var numero = 1;
var isWinter = true;
var count = 5;
var namey = "Bobz";
var names = ["Hans", "Franz"];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return 1;
}
function noReturn() {
    console.log('yo log, whattup?');
}
isWinter = 123;
n = 452;
