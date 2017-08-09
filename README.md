<!-- Actually 11:13 -->

<!--WDI3 9:09 -->
<!--9:05 5 minutes -->

<!--Hook: So throughout this course, we've been trying to teach you the legacy tools currently in use in web development, and slowly introducing the newer tools that are coming out.  One of the most useful new tools is TypeScript, for two main reasons: it provides functionality that JS developers have been asking for since the late 90s, and it was used to create many modern tools, most notably Angular 2 and Ionic 2 (an Angular-based framework for building mobile apps).  And as today is all about Angular 2, we should probably show you the language it's written in. -->

# Intro to TypeScript

## Objectives
*By the end of this lesson, developers will be able to:*

- **Install and set up** TypeScript
- **Understand** the purpose and general features of TypeScript
- **Utilize** TypeScript's built-in types to prevent bugs
- **Implement** a customized interface to prevent bugs
- **Implement** a TypeScript class with inheritance to share functionality between object types
- **Share** code between files with modules
- **Automatically compile** TypeScript into Javascript with Gulp

<!--WDI3 9:12 -->
<!--9:10 5 minutes -->

<!--Actually 11:15 -->

## What is TypeScript?

[From Stackoverflow](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript):

>TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to...provide a richer environment for spotting common errors as you type the code.

### Why do we care?

TypeScript is a more modern version of Javascript with many ES6 features and error handling, but most importantly, Angular 2 itself was written in TypeScript.  While you can use plain Javascript on top of it, most of the tutorials and docs available are written in TypeScript.  So rather than [trying to ice skate uphill](https://www.youtube.com/watch?v=pXhKzY0BKwY), we're going to set you up for a smooth Angular 2 transition.

<!--Actually 11:17 -->

<!--9:15 5 minutes -->

## Installation and Setup

In order to use TypeScript, we first need to install it.  This is *very difficult*.

`npm install -g typescript`

Verify `typescript` is installed by typing: `tsc`

Now let's build out our first file.  Make a new directory called `typeScriptTest` and create a new file called `helloWorld.ts`.

We will fill this file out together.


<!--9:19 coming back from first set -->
<!--9:20 15 minutes -->

<!-- Catch-up with code below

-- Compile this file three times, one with just console.log:
console.log("Hello World");

-- then add a function

function hello(stringy) {
	console.log("Hello " + stringy);
}

hello("universe");

--then make it Typescripty

function hello(stringy: string) {
	console.log("Hello " + stringy);
}

hello("universe");
hello(5);
-->

Next, we should compile this file with `tsc helloWorld.ts`.

If we put the wrong type into a function (say, number for a string), TypeScript will throw an error when we compile.  Note that this does not affect our ability to run our JS code with `node`, but it is a great flag-raiser for potential issues.  And it lets us know *before* this code gets to our users.

<!--WDI3 9:26 -->
<!--Actually 11:36 -->

## Basic Features

<!--WDI4 Quickly reviewed top parts (they are already in other lesson) then got to here at about 2:14 -->
<!--9:35 20 minutes -->

### Types

TypeScript comes with several built in **types** similar to the ones we're used to in Javascript.  Let's examine them in a new file called `types.ts`...

<!--Catch-up with code below

-- First start with:

var numero : number = 1;
numero = 2;

-- Then:

numero = "fish";

--And talk about the error you see together

-->

<!--WDI 3 9:32 -->

<!--Then go through the other major types:

var namey : string = "Bobz";

var isWinter : boolean = true;

--Pause before moving onto more complex types:

var names : string[] = ["Hans", "Franz"];

-->

<!--WDI3 9:37 when back from dev typing -->

<!-- Then talk about function casting:

function getName() : string{
	return 1;
}

-- Look at the error then:

function noReturn() : void {
	console.log('yo log, whattup?');
}
-->

Every time we make a change, we will be compiling our `ts` to `js` with `tsc <fileName>.ts`.

<!--2:23 WDI4 -->

If you want to know more about the available types and how to use them, check out this [Types Reference](https://www.typescriptlang.org/docs/handbook/basic-types.html).

<!--Actually 12:02 -->

### Interfaces

<!--Stopped doing catch-up-->

<!--WDI3 9:45 -->
<!--9:55 10 minutes -->

An **interface** is a blueprint for an object.  We can use it to define specific required properties or methods of objects.  Create a new file called `interfaces.ts` and follow along...

<!--Catch-up with following code

-- Create the interface

interface Stark {
	name: string
}

-- And the function

function printName(stark : Stark) {
	console.log(stark.name);
}

-- Then call the following ways

printName({name:"Eddard"});
-->
<!--WDI3 9:52 -->
<!--WDI4 2:25 turning over to devs, 2:27 coming back -->
<!--printName({age:22});

-- Talk about the error that comes up, then adjust

interface Stark {
	name: string,
	age?: number
}

printName({name:"Eddard"});

printName({name: "Bran", age:22});

-->

<!-- Actually 12:09 -->
<!--WDI4 2:31 -->

### Classes

<!--WDI3 9:55 -->
<!--10:05 10 minutes -->

A **class** is a supercharged blueprint for an object.

>**Note:** **Classes** are a very common feature in other languages, but are a very recent addition to Javascript (ES6 and above), because JS relies heavily on **prototypes**, which are similar data structures, but *not the same*.

Create a new file called `classes.ts` and follow along...

<!--Catch-up for code below

-- First create a class

class Stark {
	name: string = "Brandon";
	saying: string;
}

-- Then instantiate it

var ned = new Stark();

ned.saying = "Winter is coming!";

console.log(ned.saying);

-- Look familiar?  That's right, it's basically a constructor function--take a look at compiled JS
-->

<!--WDI4 2:38 -->
<!--WDI3 10:02 -->

<!-- How do we put a method on the prototype?

class Stark {
	name: string = "Brandon";
	hello(person:string) {
		console.log("Hello, " + person);
	}
}

-- Now let's call it

ned.hello("Bobert");

-->

<!--Actually 12:18 WDI2-->

<!--WDI3 10:08 -->
<!--WDI4 2:42 -->
<!--10:15 10 minutes -->

### Inheritance

**Inheritance** is a way for objects to access properties and methods of other objects.  Think back to **inheriting** from **prototypes** in Unit 1.  This is slightly different (you will find many people online who can tell you how), but is a good base to start from.

Create a new file called `inheritance.ts` and follow along...

<!-- Catch-up for code below

-- Create a class:

class Person {
	name: string;
	dance() {
		console.log(this.name + " is dancing...");
	}
}

-- What if we want to pass a name in on person creation?  Put this inside the class

	constructor(name:string) {
		this.name = name;
	}

-- And dance:

var bran = new Person("Bran");

bran.dance();

-->

<!--WDI4 2:48 -->

<!-- Then extend:

class CoolPerson extends Person {
	dance() {
		console.log("awesomely!");
	}
}

var robb = new CoolPerson("Robb");
robb.dance();

-- Notice that Robb is not dancing yet...let's fix that...how do we reach a class *above* the current class?

	dance() {
		super.dance();
		console.log("awesomely!");
	}

-->

<!--Actually 12:27 still not catch-up, took break -->
<!--3:00 WDI4 -->

### Modules

<!--Actually 1:39 -->

<!--WDI3 10:26 -->
<!--WDI4 3:11 -->
<!--10:25 5 minutes -->

**Modules** are a powerful way to share code between files.  In TypeScript, the functionality is similar to Node, but the syntax is a little different.  Let's see how.

We want to gather all our `main` code in one file, but allow them to be included independently, elsewhere.  For instance, we have a lot of *very advanced* mathematical methods that we'd like to include in many places.  Create a file called `math.ts` and follow along:

<!-- Catch-up for code below

export class Multiplication {
	timesTwo(n:number) {
		return n*2;
	}
}

-- Note that we could easily create another class called Addition, and we could put functions like `addTwo` inside it.  Does this look familiar?  (Yup, that's the ES6 method syntax)

-->

<!--10:30 WDI3 -->

And now create a file called `main.ts` and follow along:

<!-- Catch-up for code below

import { Multiplication } from './math';

let multiplication = new Multiplication();

console.log(multiplication.timesTwo(9));

-- Now try running main.js...what happens?

-->

<!--WDI4 3:19 -->

### Compiling with Gulp

<!--10:36 WDI3 -->
<!--10:30 10 minutes -->

Wouldn't it be annoying if the only way to convert TypeScript into Javascript was by running `tsc` every time we made a change?  It's too bad we don't know any tools that could do this automatically for us...

...

...just kidding, we know Gulp!

Let's use Gulp to take this `task` (get it?) off our hands.  And, while we're at it, we can use Gulp to compile all our Javascript into one file to reduce HTTP requests and speed up our website load time.  Awesome, right?

Let's set up our project inside `typeScriptTest` by doing the following:

1. `init`ialize `npm`
2. Install and `--save` the following packages: `gulp` `gulp-typescript` `typescript`
3. Create a new directory called `typescript` and put all your `.ts` files in there

Now create a `gulpfile.js` and set it up to compile our TypeScript into one `.js` file:

- Require all necessary libraries:

```js
var gulp = require('gulp');
var ts = require('gulp-typescript');
```

- Build a default task

```js
gulp.task('default', function () {
    return gulp.src('typescript/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('scripts'));
});
```

Now run `node scripts/output.js`.  We see all our files' output.  Cool, right?  Now in our HTML we only need to include one file, but when we're coding we have several files to keep everything organized in our heads.

<!--WDI4 3:30-->
<!--10:48 WDI3-->

## Resources

- [Udemy TypeScript Tutorial](https://www.udemy.com/typescript/learn/v4/overview)
- [TypeScript Official Docs](https://www.typescriptlang.org/)
- [TypeScript GitHub](https://github.com/Microsoft/TypeScript)
- [Why should I](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript) [use TypeScript?](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- [Gulp doc for TypeScript](https://www.typescriptlang.org/docs/handbook/gulp.html)

<!-- Actually 2:10 -->
