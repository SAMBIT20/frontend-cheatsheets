---
id: 14
title: React useRef
sidebar_label: useRef Hook
---


`useRef` allows us to get direct access to a JSX element.

To use `useRef`, call it, get the returned value, and put it on the `ref` prop for a given React element.

`Refs do not have a built-in prop on components, only React elements.`
Here is the basic syntax for `useRef`:

```jsx
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
}
```
Once a ref is attached to a given element, we can use the value stored on `ref.current` to access the element itself.

For example, if we wanted to write some code that focuses a search input when the users use the key combination Control + K.

```jsx
import { useWindowEvent } from "@mantine/hooks";
import { useRef } from "react";

function Header() {
	const inputRef = useRef();

  useWindowEvent("keydown", (event) => {
    if (event.code === "KeyK" && event.ctrlKey) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });
  
  return <input ref={inputRef} />
}
```