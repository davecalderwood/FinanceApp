NOTES FOR THIS SITE

Clone the repo into your desired location: run git clone https://github.com/davecalderwood/FinanceApp.git
Make sure you run npm i to install all the required dependencies for the project

I am looking to turn this into a full-stack app with (most likely) express and MongoDB. If you have any questions please let me know.

NOTES ON REACT HOOKS

Look at the ExtraNotes.html file in the src directory to find where examples of hooks are used in this site

Do you have questions on what React Hooks are? https://reactjs.org/docs/hooks-intro.html

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are functions that let you “hook into” React state and lifecycle features from function components

<!-- useState -->
1. useState Hook - Create State Variables

When you declare your setter function, in most cases you will prefix it with the word "set"

You can then use "setIsLoading" to set the state for the isLoading variable
example: setIsLoading(false) at the end of a data call function, you could then use this to toggle a loading animation while the API call is running:

```
const [isLoading, setIsLoading] = useState(true);

if (isLoading) {
    loadingAnimation
}
OR in JSX
{isLoading && loadingAnimation}
```

<!-- useEffect -->
2. useEffect Hook - Perform Side Effects

Side effects are actions that can change our component state in an unpredictable fashion (that have caused 'side effects').
useEffect accepts a callback function (called the 'effect' function), which will by default run every time the component re-renders.

```
const [value, setValue] = useState('initial');

useEffect(() => {
  // This effect uses the `value` variable,
  // so it "depends on" `value`.
  console.log(value);
}, [value])  // pass `value` as a dependency
```

NOTE: useEffect Does Not Actively “Watch”. You can pass the special value of empty array [] as a way of saying “only run on mount, and clean up on unmount”. Or you can add dependencies [value] when you need this side effect to re-run

<!-- useRef -->
3. useRef Hook - Reference React Elements

useRef allows us to easily use React refs. They are helpful (as in the example below) when we want to directly interact with an element, such as to clear its value or focus it, as with an input. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

```
const inputEl = useRef(null);
<input ref={inputEl} type="text" />
```

<!-- useCallback -->
4. useCallback Hook - Prevents Callbacks from Being Recreated

useCallback is a hook that is used for improving our component performance. The most common usage is to have a parent component with a state variable, but you want to update that state from a child component.

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

<!-- useContext -->
5. useContext Hook - Helps Us Avoid Prop Drilling

In React, we want to avoid the following problem of creating multiple props to pass data down two or more levels from a parent component. Context is helpful for passing props down multiple levels of child components from a parent component and sharing state across our app component tree.

This is really helpful for a sitewide object, like a shopping cart, where you would need to add an item to the cart from anywhere on the site. 

```
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

<!-- useReducer -->
6. useReducer Hook - Powerful State Management Tool

useReducer is a hook for state management, much like useState, and relies upon a kind of function called a reducer. useReducer can be used in many of the same ways that useState can, but is more helpful for managing state across multiple components that may involve different operations or "actions".

If you have an object that has 10 different states, it would be much easier to put it all into one useReducer, rather than 10 different useState's. You will need to reach for useReducer less than useState around your app.

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

Here you could write: 
```
const [count, setCount] = useState(initialCount);
<button onClick={() => setCount(initialCount)}>Reset</button>
<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
```

Downside of using useState here is you have to set the count individually on each button. The code is almost identical for this, so useReducer would make this highly re-usable accross components