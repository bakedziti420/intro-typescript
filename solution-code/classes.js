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
