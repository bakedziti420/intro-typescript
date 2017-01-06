# Intro to TypeScript

## Installation and Setup

`npm install -g typescript`

Verify: `tsc`

First `helloWorld.ts`:

```js
console.log("Hello World");

function hello(string: String) {
	console.log("Hello " + string);
}

hello("universe");
hello(5);
```

## Basic Features

### Types and Interfaces

- [Types Reference](https://www.typescriptlang.org/docs/handbook/basic-types.html)

An **interface** is a blueprint for an object.

### Classes and Inheritance

A **class** is a supercharged blueprint for an object.

**Inheritance** is a way for objects to access properties and methods of other objects.

### Modules

**Modules** are a powerful way to share code between files.

### Compiling with Gulp

[Gulp doc for TypeScript](https://www.typescriptlang.org/docs/handbook/gulp.html)

## Resources

- [Udemy TypeScript Tutorial](https://www.udemy.com/typescript/learn/v4/overview)
- [TypeScript Official Docs](https://www.typescriptlang.org/)
