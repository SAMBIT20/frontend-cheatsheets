---
id: 12
title: React useState Hook
sidebar_label: useState Hook
---


`useState` does exactly what it says—it allows us to use stateful values in function components.

`useState` is used instead of a simple variable because when state is updated, our component re-renders, usually to display that updated value.

Like all hooks, we call `useState` at the top of our component and can pass it an initial value to put on its state variable.

We use array destructuring on the value returned from `useState` to access (1) the stored state and (2) a function to update that state.

```jsx
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```
A basic example of using `useState` is to increment a counter.

We can see the current `count` from the count variable and can increment the state by passing `count + 1` to the `setCount` function.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return <button onClick={updateCount}>Count is: {count}</button>;
}
```