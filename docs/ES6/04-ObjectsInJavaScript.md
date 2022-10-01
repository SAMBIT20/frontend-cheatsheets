---
id: 5
title: Objects in JavaScript-Everything You Need to Know.
sidebar_label: Objects in JavaScript
---

Objects are the most used data type in JavaScript. Objects make it easy to work with data. But, What is actually an object, How does it look like?

An object is a collection of data in the form of key-value pairs. Objects have keys and every key has a corresponding value. These values can be as simple as a number or string or maybe some complex types like function or even another object itself.

### How to declare an Object
We can declare an object using something called object literals (there are other ways too). They are basically a number of key-values pairs put in `{ }`. Keys are also called properties.

So let's finally create our First Object.

```javascript
const person = {
  name: "Faheem",
  country: "India",
  getDetails: function(){
      return `${this.name} belongs to ${this.country}`;
  }
}
```

In the above code snippet, we have created a person object that has 3 pairs of key-value. `name` and `country` are simple string type , whereas `getDetails()` is of function type.

We can also create an empty object using a` { }`. Just don't put any key-value inside `{ }`.

```javascript
const person = { };
```
Wondering why create such an empty object? Turns out we can create empty objects and set our key-value pairs later on. We will see how to do that.

### Accessing values of an Object

So we know how to create an object. But how to pull values from an object?

There are two easy and convenient ways to access the values of an object.

#### 1. Using dot notation

To get the value of a property from an object, we can use a dot `(.)`. The syntax is `object.property`

Let's see this in action.

```javascript
const person = {
  name: "Faheem",
  country: "India",
  getDetails: function(){
      return `${this.name} belongs to ${this.country}`;
  }
}

console.log(person.name); // "Faheem"
console.log(person.getDetails()); //"Faheem belongs to India"
```
Notice that the `getDetails` property of the person object is a function. Therefore , we have used `( )` to call it.

#### 2. Using bracket notation.

We can also get the value of a property using `[ ]`. See example below -

```jsx
const person = {
  name: "Faheem",
  country: "India",
  getDetails: function(){
      return `${this.name} belongs to ${this.country}`;
  }
}

console.log(person["name"]); // "Faheem"
console.log(person["getDetails"]()); //"Faheem belongs to India"
```

### Dot notation vs bracket notation.
We have two ways to get access to values, so an obvious question is what is the difference between these two? When to use what?

Let's find the answer to these questions.

The dot notation doesn't work in two cases
- When we don't know the property name prior to use it. Suppose the property name is stored in a variable.

What bracket notation does is, It first compute the value of the variable and then look for that property in the object.

- When the property name is a combination of two words for eg. `country name`. This `country name` is not a valid variable name so dot notation doesn't work in such a case.

Let's look at code demonstrating these two -

```jsx
const person = {
  name: "Faheem",
  "country name": "India",
  getDetails: function(){
      return `${this.name} belongs to ${this.country}`;
  }
}
const key = "name";

console.log(person.key); // undefined
console.log(person[key]); // "Faheem"
console.log(person["country name"]); // "India"
console.log(person.country name); // Syntax Error
```
Notice `person.key` gives undefined because it directly looks for the 'key' property inside person object which is not there. But `person[key]` does work because the variable `key` is evaluated first to `name` and `name` is there in the person object.

Similarly, the property `country name` with more than one word can't be accessed using a dot.

### Setting property on an object after creation
we can set a property in the same way we get a property. See the example below.
```javascript
const person = { }
person.name = "Faheem";
person["country"] = "India";

console.log(person.name); // "Faheem"
console.log(person.country); // "India"
```
### Summary
- Objects are the basic building blocks of JavaScript.

- Objects are a combination of a number of keys and corresponding values put inside { }.

- Object properties can be accessed via either dot notation or square bracket notation.

- We can also set a property on an object later after creation.