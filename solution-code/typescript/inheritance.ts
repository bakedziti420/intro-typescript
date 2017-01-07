class Person {
	name: string;
	constructor(name:string) {
		this.name = name;
	}

	dance() {
		console.log(this.name + " is dancing...");
	}
}

var bran = new Person("Bran");

bran.dance();

class CoolPerson extends Person {
	dance() {
		super.dance();
		console.log("awesomely!");
	}
}

var robb = new CoolPerson("Robb");
robb.dance();