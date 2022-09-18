---
id: 15
title: React useContext
sidebar_label: useContext Hook
---

`useContext` provides an easier way of consuming context than using the standard Context.Consumer component.

The syntax involves passing the entire Context object that we want to consume into `useContext`. The returned value is the value passed down to Context.

```jsx
import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);

  // ...
}
```
To rewrite our example from earlier, using the `useContext` hook:

```jsx
import { createContext, useContext } from 'react';

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
	const name = useContext(NameContext);

  return (
    <h1>Welcome, {name}</h1>
  );
}
```