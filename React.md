# The React Cheatsheet for 2022 ⚛️

## Table of Contents
- [React Elements](#react-elements)
- React Element Attributes
- React Element Styles
- React Fragments
- React Components
- React Props
- React Children Props
- React Conditionals
- React Lists
- React Context
- React Hooks
- React useState Hook
- React useEffect Hook
- React useRef Hook
- React useContext Hook
- React useCallback Hook
- React useMemo Hook


# *React Elements*
React elements are written just like regular HTML elements. You can write any valid HTML element in React.
```HTML
<h1>My Header</h1>
<p>My paragraph>
<button>My button</button>
```
We write React elements using a feature called JSX.

However, because JSX is really just JavaScript functions (and not HTML), the syntax is a bit different.

Unlike HTML, single-tag elements (like the img element), must be self-closing. They must end in a forward slash /:

```HTML
<img src="my-image.png" />
<br />
<hr />
```
