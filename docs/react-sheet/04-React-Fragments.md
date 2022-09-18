---
id: 4
title: React Fragments
sidebar_label: Fragments
---

React also gives us an element called a fragment.

React requires that all returned elements be returned within a single “parent” component.

For example, we can’t return two sibling elements, like an h1 and a paragraph from a component:

```jsx
// this syntax is invalid
function MyComponent() {
  return (
    <h1>My header</h1>
    </p>My paragraph</p>
  );
}
```

If we don’t want to wrap our elements in a container element like a div, we can use a fragment:

```jsx
// valid syntax
function MyComponent() {
  return (
    <>
      <h1>My header</h1>
      </p>My paragraph</p>
    </>
  );
}
```

We can write fragments in a regular or shorthand syntax:

```jsx
<React.Fragment></React.Fragment>
            OR
           <></>.
```




