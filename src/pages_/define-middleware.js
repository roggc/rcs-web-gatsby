import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";
import ReactMarkdown from "../react-markdown/react-markdown";

const DefineMiddleware = () => (
  <>
    <ReactMarkdown>
      For React Context slices, you can define **middleware** in a per-slice
      basis to intercept and customise action workflows.
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    todos: {
      // React Context slice
      initialArg: [],
      reducer: (state, action) => {
        switch (action.type) {
          case "FETCH_TODOS_REQUEST":
            return state;
          case "FETCH_TODOS_SUCCESS":
            return action.payload;
          case "FETCH_TODOS_FAILURE":
            return state;
          default:
            return state;
        }
      },
      middleware: [
        () => (next) => (action) => {
          // <-- logger middleware (first middleware applied)
          console.log("dispathing action:", action);
          next(action);
        },
        (dispatch) => (next) => (action) => {
          // <-- async middleware (second middleware applied)
          if (typeof action === "function") {
            return action(dispatch);
          }
          next(action);
        },
      ],
    },
    // rest of slices (either Redux or React Context slices)
  },
});
`}</CodeBlock>
    <ReactMarkdown>Then you can write your action creator like:</ReactMarkdown>
    <CodeBlock
      className={styles.codeBlock}
    >{`const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODOS_REQUEST" });
  try {
    const response = await fetch("https://api.example.com/todos");
    const todos = await response.json();
    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: todos });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
  }
};`}</CodeBlock>
    <ReactMarkdown>And use it in your component like:</ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// todos.jsx
import { useSlice } from "./slices";
import { useEffect } from "react";

const Todos = () => {
  const [todos, dispatchTodos] = useSlice("todos");
  useEffect(() => {
    dispatchTodos(fetchTodos());
  }, [dispatchTodos]);
  return {todos.map(/* ... */)};
};

export default Todos;`}</CodeBlock>
    <ReactMarkdown>
      It's important to note that middleware in React Context slices does not
      have access to the slice's state value.
    </ReactMarkdown>
  </>
);

export default DefineMiddleware;
