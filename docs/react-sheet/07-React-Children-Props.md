---
id: 7
title: React Children Props
sidebar_label: Children Props
---

Props can also be passed by placing data between the opening and closing tags of a component.

Props that are passed this way are placed on the `children` property.

```jsx
function App() {
  return (
    <User>
      <h1>Hello, John Doe!</h1>
    </User>
  );
}

function User({ children }) {
  return children; // Hello, John Doe!
}
```
