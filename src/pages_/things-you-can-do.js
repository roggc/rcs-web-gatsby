import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";

const ThingsYouCanDo = () => (
  <>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {}, // <-- intialArg === undefined (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    isLightTheme: { initialArg: true, reducer: (state) => !state }, // <-- reducer without action (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    greeting: { initialArg: "hello", reducer: () => "bye" }, // <-- reducer without state and action (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    greeting: { init: () => "hello" }, // <-- pass an 'init' function without an 'initialArg' (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
    <CodeBlock className={styles.codeBlock}>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [foo, setFoo] = useSlice(""); // 'foo' and 'setFoo' will be undefined. If you pass an empty string or a slice name that has not been defined (doesn't exist), it returns undefined for both 'value' and 'setValue'
  return null;
};

export default App;`}</CodeBlock>
  </>
);

export default ThingsYouCanDo;
