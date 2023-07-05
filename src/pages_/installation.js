import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";

const Installation = () => (
  <CodeBlock
    className={styles.codeBlock}
  >{`npm i react-context-slices`}</CodeBlock>
);

export default Installation;
