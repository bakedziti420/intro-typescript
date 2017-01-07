interface Stark {
	name: String,
	height?: number
}

function printName(stark : Stark) {
	console.log(stark.name);
}

printName({name:"Eddard"});

printName({age:22});