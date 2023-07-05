import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";
import ReactMarkdown from "../react-markdown/react-markdown";

const GetInitialStateFromStorage = () => (
  <>
    <ReactMarkdown>
      To get initial state of a React Context slice from local storage for web
      or async storage for React Native you do it like this.
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    counter: { initialArg: 0, isGetInitialStateFromStorage: true }, // React Context slice
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
    <ReactMarkdown>
      Then you should persist the state of the slice when it changes in your
      component.
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// app.jsx
import { useSlice } from "./slices";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useSlice("counter");

  // this persist the value to local storage
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count}
    </>
  );
};

export default App;`}</CodeBlock>
    <ReactMarkdown>For React Native you do:</ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    counter: { initialArg: 0, isGetInitialStateFromStorage: true }, // React Context slice
    // rest of slices (either Redux or React Context slices)
  },
  AsyncStorage, // <-- set AsyncStorage key to AsyncStorage for React Native
});`}</CodeBlock>
    <ReactMarkdown>
      And then in your component you should do it like this when persisting
      state value:
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// app.jsx
import React, { useEffect, useRef } from "react";
import { useSlice } from "./slices";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const isInitialMountRef = useRef(true);
  const [count, setCount] = useSlice("counter");

  useEffect(() => {
    (async () => {
      !isInitialMountRef.current &&
        (await AsyncStorage.setItem("counter", JSON.stringify(count)));
    })();
  }, [count]);

  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);

  return (
    <View>
      <Button title="+" onPress={() => setCount((c) => c + 1)} />
      <Text>{count}</Text>
    </View>
  );
};

export default App;`}</CodeBlock>
  </>
);

export default GetInitialStateFromStorage;
