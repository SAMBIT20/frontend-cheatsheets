---
id: 6
title: React Props
sidebar_label: Props
---



React components can accept data passed to them called props.

Props are passed from the parent component to a child component.

Here we are passing a prop `name` from App to the User component.

```jsx
function App() {
  return <User name="John Doe" />
}

function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, John Doe!
}
```
Props is an object, so we can select the `name` prop within `User` to get its value.

`To embed any dynamic value (that is, a variable or expression) within JSX, you must wrap it in curly braces.`

Since we are only using the `name` property on the props object, we can make our code simpler with object destructuring:

```jsx
function App() {
  return <User name="John Doe" />
}

function User({ name }) {
  return <h1>Hello, {name}!</h1>; // Hello, John Doe!
}
```

Any JavaScript value can be passed as a prop, including other elements and components.