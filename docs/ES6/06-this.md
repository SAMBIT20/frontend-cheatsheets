---
id: 6
title: The mysterious 'this' keyword Let's Demystify it.
sidebar_label: The mysterious 'this'
---

### Introduction
The 'this' keyword is considered one of the confusing topics by JavaScript developers. Even experienced developers get it wrong sometimes.

So, should you be scared now? NO.

Developers get it wrong because they either don't know all the scenarios or by mistake sometimes.

Let's begin and cover all the scenarios where the value of `this` might get different.

### What will we learn today?

1. `this` in the global scope
2. `this` inside functions ( all four cases).
3. `this` inside arrow functions.
4. Binding the value of this to a custom object.

**Also, we will discuss the consequences of `strict mode` in all the above cases.**

### 1. `this` in the global scope

In the global context, `this` refers to the global object. The value of the global object depends on the environment in which you are running your JavaScript code.

If you are running your JavaScript code in a browser, then the global object is the `window` object. And, In the NodeJS environment, the global object is called the `'global object'` itself.

Let's verify it by writing some code.

```javascript
console.log(this === window); 

// output
true
```
Notice the output is true because we run the code in the browser, that's why `this` is equal to the `window`.

### 2. `this` inside Functions

The value of `this` inside a function depends upon how that function is called. There are four ways to call a function. Let's look at them one by one -

#### I) Making a standalone call

Calling a function directly like `function_name();` is termed a standalone call. In this case, the value of `this` inside the function is the window object.

But, If you're doing so in `strict mode` then the value of `this` becomes `undefined` in the function.

Let me show you both cases -

```javascript
function foo(){
    console.log(this === window) // true
}

foo();

function bar(){
 'use strict'
    console.log(this) // undefined
}

bar();
```
> **Note** that the value of this inside function foo is equal to the window object. But, as we have activated strict mode inside the bar, the value of this is undefined there.

#### II) Calling the function in the context of an object.

When a function is a property on an object then we call that method like `object.function_name();`. This way of calling a function is termed as calling in the context of an object.

So, When a function is called as a method on an object, then the value of this is set to the object which was used to call the method.

Let's take an example for more clarification.

```javascript
const person = {
  name: "Faheem",
  sm:"Twitter",
  foo: function(){
      return this;
  }
}

console.log(person.foo() === person); // true
```

> **Notice** the console prints true as expected. Method foo has been called in the context of the object person, so the value of this inside foo is the same as the object person itself.

#### III) Calling a function in constructor mode

When we call a function using the new keyword, It is termed as calling the function in constructor mode.
When we call a function in constructor mode, the value of this is the new object being constructed.

See example below

```javascript
function Student(name, roll, course){
    this.name = name;
    this.roll = roll;
    this.course = course;
}

const student1 = new Student("Vinay", 1011, ['Flutter', 'Dart']);
console.log(student1.name); // "Vinay"
```

> **Notice** that we have used `this` to set properties on the new object being created.

#### IV) Calling using `function_name.call()`

The fourth way to call a function is using the `call` property of the function. In JavaScript, every function has a property named `call` which can be used to call the function. I know it sounds weird but this is what it is.

Let me show you how to use call property first.

```javascript
function foo(){
    console.log("I'm foo");
}
foo.call();

// Output
"I'm foo"
```
Now, You have seen how to call a function using the `call` property. Are you thinking, who the hell will call a function this way if we can call directly?

Here is one reason. When we invoke a function using the property `call`, we can actually pass an object to the `call() `and inside that function, this will point to the object which was passed as the argument.

Doesn't make any sense? See the example for clarification

```javascript
function foo(){
    console.log(this.name);
}
const person = {
  name:"Faheem",
  sm:"Twitter"
}
foo.call(person);

// output 
"Faheem"
```
Example Explanation

We have invoked `foo` like `foo.call(person)`. This line calls the function foo and sets the value of `this` to the person object inside the function foo.

That is why `this.name` inside the functionfoo prints "Faheem".

So these are all four ways to call a function and their behaviors towards `this`.

### 3. this inside arrow function

The arrow functions don't have their own value of `this`. The value of `this` inside an arrow function is equivalent to the value of `this` in its outer environment.

Putting differently, the arrow function borrows the value of `this` from its parent's scope.

Let's take numerous examples to clarify this.

```javascript
const obj = {
  name:"Faheem",
  sm:"Twitter",
  bio: () => this === window
}

console.log(obj.bio()); // true
```
> **Notice** because bio is an arrow function, It has taken `this` from the parent context which is actually the global context. Hence, `this` in `bio` refers to the window object.

Another Example

```javascript
const person = {
  myname:"Faheem",
  sm:"Twitter",
  bio: function(){
          setTimeout(() => {
          console.log(this.myname);
      }, 100)
  },
}

person.bio();

//output
"Faheem"
```

Let me explain the above code

We are calling bio in the person object context. So, the value of this inside bio is the person object itself.

We are using this not inside the bio function directly but inside the arrow function of `setTimeout`. The `this.myname` inside arrow function returns "Faheem" because the arrow function has taken this value from the outer scope, that is from the scope of the bio.

If you replace the arrow function inside `setTimeout` with a regular function, you will get undefined as the output.

See below

```javascript
  const person = {
  myname:"Faheem",
  sm:"Twitter",
  bio: function(){
          setTimeout(function(){
          console.log(this.myname);
      }, 100)
  },
}

person.bio();
//Output
undefined
```
The function inside `setTimeout` is not an arrow function. So it tries accessing its own this unlike the arrow function which accesses this from the parent. That is why this.myname returns undefined, not 'Faheem'.

### 4. Binding the value of `this` to a customer object.
We can bind the value of this dynamically using call (we have seen this), apply, and bind methods. If you don't know about these methods , you can [Click👆](/docs/ES6/7/)

### Summary
- The value of this is determined by the context in which it is accessed.
- First, check how a function is being called and then determine what could be the value of this inside that function.
- Arrow functions don't have it's own this. It borrows the value of this from the parent's scope.