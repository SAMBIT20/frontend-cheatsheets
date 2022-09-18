---
id: 13
title: React useEffect Hook
sidebar_label: useEffect Hook
---

If we want to interact with the “outside world”, such as using an API, we use the `useEffect` hook.

useEffect is used to perform a side effect, which means to perform an operation that exists outside of our app that doesn’t have a predictable result.

The basic syntax of useEffect requires a function as a first argument and an array as the second argument.

```jsx
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
```
If we want to fetch data, we would use `useEffect`, such as in fetching and displaying a list of posts:

```jsx
import { useEffect } from 'react';

function PostList() {
	 const [posts, setPosts] = useState([]);

   useEffect(() => {
	   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(posts => setPosts(posts));
   }, []);

   return posts.map(post => <Post key={post.id} post={post} />
}
```
If we need to use a value that comes from outside the effect function, it must be included in the dependencies array.

If that value changes, the effect function will be re-executed.

For example, here is a bit of code that adds or removes the class “overflow-hidden” to the body element whenever the mobile menu is opened or closed.

```jsx
function Mobile({ open }) {
  useEffect(() => {
    const body = document.querySelector("#__next");

    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);
 
  // ...
}
```