class Stark {
	name: string = "Brandon";
	static castle: string = "Winterfell";
	saying: String;

	constructor() {
		this.saying = Stark.castle;
	}

	hello(person:string) {
		console.log("Hello, " + person);
	}
}

var ned = new Stark();

console.log(ned.saying);

ned.saying = "Winter is coming!";

console.log(ned.saying);

ned.hello("Bobert");