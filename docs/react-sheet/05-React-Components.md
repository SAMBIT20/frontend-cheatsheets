---
id: 5
title: React Components
sidebar_label: Components
---

We can organized groups of elements into React components.

A basic function component is written similarly to a regular JavaScript function with a couple of differences.

- Component names must start with a capital letter (that is, MyComponent, instead of myComponent)
- Components, unlike JavaScript functions, must return JSX.


Here is the basic syntax of a React function component:

```jsx
function App() {
  return (
     <div>Hello world!</div>
  );
} 
```