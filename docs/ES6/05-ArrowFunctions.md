---
id: 5
title: Arrow Functions
sidebar_label: Arrow Functions
---

Arrow functions syntax lets you write functions in a way that is concise, clean, and easy to read.

Let's write a function to calculate the square of a number and return the result using both a regular function and an arrow function.

```javascript
function square(num){
    return num*num;
}

const arrowSquare = (num) => num * num;

console.log(square(4)); // 16
console.log(arrowSquare(6)); // 36
```

> **Notice** arrow functions return implicitly, without using a return statement.

In the case of a single parameter, you can drop the parentheses `( )` from the arrow functions syntax. See the code below to understand what does it mean.

```javascript
const arrowSquare = num => num * num;

console.log(arrowSquare(6)); // 36

```
What if you want to return multiple line things, like an object? You can do it in two ways, either wrap the object in a `( )` or use an explicit return statement.

```javascript
const person = (name, age) => ({
        name:name,
        age:age
});

const person2 = (name, age) => {
        return {
          name:name,
          age:age
       }
};

console.log(person("Faheem", 23)); 
console.log(person2("Raza Rython", 30));
```
Arrow functions don't have their own this. It inherits the value of the this keyword from its parent's scope. For details of how this works, Checkout next topic [Click👆](/docs/ES6/6/)