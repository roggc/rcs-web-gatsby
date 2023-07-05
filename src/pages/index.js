import * as React from "react";
import Layout from "../components/layout/layout";
import IndexContainer from "../pages-components/index/index-container/index-container";
import IconsFragment from "../pages-components/index/icons-fragment/icons-fragment";
import ReactMarkdown from "../react-markdown/react-markdown";
import * as styles from "./index.module.css";
import Card from "../pages-components/index/card/card";

const Page = ({ location }) => {
  return (
    <Layout location={location}>
      <IndexContainer>
        <div className={styles.titleContainer}>
          <div className={styles.iconsContainer}>
            <IconsFragment />
          </div>
          <div className={styles.title}>react-context-slices</div>
        </div>
        <Card>
          <ReactMarkdown>
            **react-context-slices** offers a unique solution to global state
            management in React by seamlessly integrating both **Redux** and
            **React Context** with **zero-boilerplate**.
          </ReactMarkdown>
          <ReactMarkdown>
            Define your slices using the *`getHookAndProviderFromSlices`*
            function provided by the library. This gives you the *`useSlice`*
            hook and a **provider** component.
          </ReactMarkdown>
          <ReactMarkdown>
            Use the *`useSlice`* hook in your components to get the value of the
            slice's state, a setter or dispatch function, and an actions object
            (for Redux slices).
          </ReactMarkdown>
          <ReactMarkdown>
            What differentiates a Redux slice from a React Context slice is the
            presence of the *`reducers`* key in its definition (if present, it's
            a Redux slice; otherwise it's a React Context slice).
          </ReactMarkdown>
          <ReactMarkdown>
            React Context slices can initialize state from **storage** (local
            for web and async for React Native) and use **middleware** for
            action workflow customization in a per-slice basis.
          </ReactMarkdown>
          <ReactMarkdown>
            Use **react-context-slices** to manage global state in React with
            **zero-boilerplate** either by defining **Redux slices** or **React
            Context slices**.
          </ReactMarkdown>
        </Card>
      </IndexContainer>
    </Layout>
  );
};

export default Page;

export { Head } from "../pages-components/common/head";
