import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";
import ReactMarkdown from "../react-markdown/react-markdown";

const PassOptions = () => (
  <>
    <ReactMarkdown>
      You can pass options to the Redux store, those defined by the
      documentation in Redux Toolkit about the parameters accepted by the
      *`configureStore`* method, except *`reducers`*. Look at the documentation
      there to know what are these options.
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {
      // Redux slice
      initialState: 0,
      reducers: {
        increment: (state) => state + 1,
      },
    },
    // rest of slices (either Redux or React Context slices)
  },
  reduxStoreOptions: {
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat((store) => (next) => (action) => {
        console.log("dispatching action:", action);
        next(action);
        console.log("next state:", store.getState());
      }),
  },
});`}</CodeBlock>
  </>
);

export default PassOptions;
