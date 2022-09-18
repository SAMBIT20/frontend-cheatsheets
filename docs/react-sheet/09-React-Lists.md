---
id: 9
title: React Lists
sidebar_label: Lists
---

Lists of React components can be output using the `.map()` function.

`.map()` allows us to loop over arrays of data and output JSX.

Here we are outputting a list of soccer players using the SoccerPlayer component.

```jsx
function SoccerPlayers() {
  const players = ["Messi", "Ronaldo", "Laspada"];

  return (
    <div>
      {players.map((playerName) => (
        <SoccerPlayer key={playerName} name={playerName} />
      ))}
    </div>
  );
}
```

Whenever you are looping over an array of data, you must include the key prop on the element or component over which you are looping.

Additionally, this key prop must be given a unique value, not just an element index.

In the example above, we are using a value which we know to be unique, which is the `playerName`.
