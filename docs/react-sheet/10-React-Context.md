---
id: 10
title: React Context
sidebar_label: Context
---

React context allows us to pass data to our component tree without using props.

The problem with props is that sometimes we pass them through components that don’t need to receive them. This problem is called props drilling.

Here is a oversimplified example of passing props through a `Body` component that doesn’t need it:

```jsx
function App() {
  return <Body name="John Doe" />;
}

function Body({ name }) {
  return <Greeting name={name} />;
}

function Greeting({ name }) {
  return <h1>Welcome, {name}</h1>;
}
```

` Before using Context, its best to see if our components can be better organized to avoid passing props through components that don’t need it.`

To use Context, we use the `createContext` function from React.

We can call it with an initial value to be put on context.

The created context includes a `Provider` and a `Consumer` property, which are each components.

We wrap the Provider around the component tree that we want to pass the given value down. Next, we place the Consumer in the component we want to consume the value.

```jsx
import { createContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    <NameContext.Provider>
  );
} 

function Body() {
  return <Greeting />;
} 

function Greeting() {
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}
```