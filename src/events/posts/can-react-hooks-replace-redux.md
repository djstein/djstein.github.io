At the Apple Frontend Dev's meetup, I gave an talk on my attempt to use useReducer and useContext to replace Redux in a React application.
I ran into a TON of problems related to the global state updating hooks being called almost infinitely when children and parent components got into loops of updating each other.
My solution was to add component level blocks to when dispatchs would be called.
A better solution was proposed by the React Redux team, as they ran into similar issues, with the release of react-redux 7.1.0 (The One With Hooks).
By using useMemo and useCallback and useRef, the team was able to find a way not cause multiple rerenders on lower function based components.

Attempting to make the recording public as it was Apple internal.
