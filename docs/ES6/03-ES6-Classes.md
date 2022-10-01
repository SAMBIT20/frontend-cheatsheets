---
id: 4
title: OOP-Working with Classes
sidebar_label: Classes in JavaScript
---

In this , we will look at what OOP is, and also I will share some secrets behind classes in JavaScript.

### Introduction

OOP is a `programming paradigm` based on `Objects`. You can also say that It is a way to structure your program to make it more flexible and maintainable.

Objects and Classes are the basic building blocks of OOP, so let's deep dive and understand how can you program in OOP style.

> **_NOTE:_** There are other famous programming paradigms, such as `procedural` and `functional`.

### What will we learn in this section?

- Objects
- Classes
- Constructor Method
- Public and Private properties
- Encapsulation
- Static vs Instance fields
- Inheritance
- Polymorphism
- Method Overriding
- Secret about Classes in JS

### 1. Objects

You can think of an object as one entity that has some properties and functions associated with it.

For example, suppose you're building a School Management App. In this app, you can take a teacher as an object with properties, `name`, `empid`, `age`, etc., and having functions like `introduce`, `teach`, etc.

Let's create an object to see how does it look.

```javascript
const student1 = {
  name: "Aryan",
  age: 20,
  major: "CSE",
  introduce: function () {
    console.log(`I'm ${this.name}, ${this.age} years old. 
                   I'm a student of ${this.major}. `);
  },
};
```

If you don't understand how the above code works, Please check the Objects in JavaScript [Click👆](/docs/ES6/5/)

### 2. Classes

The first question you should ask is, Why classes? Why do we need this?

To understand why we need classes, consider a scenario where you have 100 such students as shown in the code snippet above. Would you write 100 such objects with all properties? NO.

In such a scenario, a class comes to rescue you. We define a Class which acts like a template to create objects. We pass different values of properties for creating different objects (We will see this in action very soon).

So, Classes are templates for creating objects and an object is called an instance of that class. The keyword class is used to declare a `class` followed by a name of your choice and a pair of curly braces `{ }`.

### 3. Constructor Method

`constructor` is a special method used to create and initialize an object. There can be only one method with the name 'constructor', declaring more than one will raise `SyntaxError`.

Let's take an example to cover class and constructor.

```javascript
class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  introduction() {
    console.log(`I'm ${this.name}, ${this.age} years old. 
                   I'm a student of ${this.major}. `);
  }
}

const student1 = new Student("Aryan", 20, "CSE");
student1.introduction();

const student2 = new Student("Kaarthik", 21, "CSE");
student2.introduction();

// OUTPUT
// "I'm Aryan, 20 years old. I'm a student of CSE. "
// "I'm Kaarthik, 21 years old. I'm a student of CSE. "
```

Let me explain, what's going on in the above code.

When you say `new Student` and pass parameters along, the constructor method gets called. This method creates an object and assigns a `this` reference to this newly created object. That's why we use `this` to set the properties on this newly created object. Finally, this new object is returned and we have stored them in `student1` and `student2`.

### 4. Public and Private properties

The properties you have seen above are examples of public properties. They can be accessed from outside of the class.

Private properties can only be accessed inside the class. Any attempt to access them from outside of the class will raise a `SyntaxError`.

Look at the example below -

```jsx
class Student {
  #age;
  #major = "Information";
  constructor(name, age, major) {
    this.name = name;
    this.#age = age;
    this.#major = major;
  }
}
const student = new Student("Aryan", 20, "CSE");
console.log(student.name); // Aryan
console.log(student.#age); // SyntaxError
```

> NOTE that`#` is part of the name of the private field/properties. Also, private fields must be declared up-front in the class, before referring them in methods.

### 5. Encapsulation

Encapsulation is all theoretical in my opinion. It means wrapping properties and related methods in one single unit and that unit is the Class itself. Just like, we have some properties and methods in the class Student above.

### 6. Static vs Instance fields

Methods or properties of a class are also termed as fields. Fields can be of two types -

1. Instance Fields - The fields we have seen so far are actually instance fields. They are specific to each object, meaning, their values might be different for different objects. For eg, different students have a different name, age, etc.

Any method using an instance property must be an **_instance method_**.

1. Static Fields - Static Fields have the same value for all objects of a class. They are attached to the class itself, not an object. We can't access them using instances of the class. We refer to them using the name of the class itself.

For eg. In a school management app, the name of the school remains the same for all objects. So, we should declare that as a static property.

We can have both static properties and static methods. Static methods are utility methods used for doing some tasks which are not specific to an object.

Let us take an example

```javascript
class Student {
  static schoolName = "Abcd school of Excellenxce";
  static getSchool() {
    return Student.schoolName;
  }
}

const s = new Student();

console.log(Student.schoolName); // "Abcd school of Excellenxce"
console.log(Student.getSchool()); // "Abcd school of Excellenxce"
console.log(s.schoolName); // Undefined
console.log(s.getSchool()); // TypeError
```

> **_Note_** that instances can not be used to access static properties or methods. The class name is used instead.

### 7. Inheritance

Sometimes we require to use some properties and methods of an already existing class. In such a scenario, we define a new class and inherit from the existing one.

The class from which we inherit is termed as Parent/Base class and the class one inherits the parent class is called a child/derived class.

The keyword `extends` is used to implement inheritance.

**Syntax** : `class Child extends Parent { }`

The idea behind inheritance is code reusability. Inheriting from the Parent class makes the Child class able to use all the methods and properties of the parent class.

Let's see an example

```javascript
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  introduction() {
    return "I'm a human being";
  }
}
class Student extends Person {
  constructor(name, age, sex, roll) {
    super(name, age, sex);
    this.roll = roll;
    console.log(super.introduction()); // "I'm a human being"
  }
}

const p1 = new Person("Danny", 33, "M");
const s1 = new Student("Florin", 27, "Other", 101);
console.log(p1.name); // "Danny"
console.log(s1.name); // "Florin"
console.log(s1.introduction()); // "I'm a human being"
```

Few things to note down -

1. Notice how we have used the existing person class to inherit properties and methods in the Student class, and, at the same time, we have declared one other variable roll in the Student class to full fill our need.

2. `super()` must be called at the first line of the child class constructor, before using `this` in the child class, otherwise, you will get an error.

3. `super()` invokes the base class constructor and initialize an object with the properties passed. We can also use `super` to refer to any method in the parent class from inside the child class. See the last line of the Student class constructor

### 8. Polymorphism

Polymorphism has made of two words - Poly -> multiple, morph -> form. So, polymorphism means 'multiple forms'.

What happens sometimes is that, for a parent class method, we need a different definition in our child class. For eg. look at the `introduction` method of Parent class. This method doesn't suit our Student class.

So, what will we do? We will give a new form to the `introduction` method in our child class. The name would be the same but we will give a different body to this method.

Let's see this in action.

```javascript
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  introduction() {
    return "I'm a human being";
  }
}
class Student extends Person {
  constructor(name, age, sex, roll) {
    super(name, age, sex);
    this.roll = roll;
    console.log(super.introduction()); // "I'm a human being"
  }
  introduction() {
    return `I'm a student and My roll is ${this.roll} `;
  }
}

const person = new Person("Danny", 33, "M");
const stu = new Student("Florin", 27, "Other", 101);

console.log(person.introduction()); // "I'm a human being"
console.log(stu.introduction()); // "I'm a student and My roll is 101 "
```

**Take a look** at the message printed. You will realize that we have changed the `introduction` method definition for the Student class but there is no change in the Person's class `introduction` method.

### 9. Method Overriding

What you have just seen above is actually method overriding. We have overridden the `introduction` method in the Student class.

**Definition of method overriding -**

Defining a method in child class that is already present in the parent class is called Method Overriding. Putting differently, overriding means overriding the functionality of an existing method.

### 10. Secrets about Classes in JavaScript.

Classes are basically functions in JavaScript. They are syntactic sugar over constructor functions with some differences

Don't believe me? Let me show you using `typeof` operator

```javascript
class Person {}

console.log(typeof Person); // "function"
```

Now, Proven.

Let me list down differences as well.

1. Function declarations are hoisted but class declarations are not. That means, we can't access a class before declaration though we can use function prior to declaring it.

2. We can't create an object of a class without using the `new` keyword but there is no such restrictions in calling functions.

3. Class body automatically executes in `strict mode.` If you don't know, you should check what `strict mode` is.

### Summary

1. Classes are templates for creating objects.
2. Objects are having some properties and associated methods to work on properties.
3. If the value of a variable is the same for all objects of a class, then you should declare that as a static variable otherwise declare that as an instance variable.
4. If a method doesn't need access to instance variable then declare that as a static method.
5. Private properties can not be accessed outside of the class in which it is declared.
6. Inheritance increases code reusability and helps you follow the DRY (Don't Repeat Yourself) principle.