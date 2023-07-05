import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import CodeBlock from "../code-block";
import ReactMarkdown from "../react-markdown/react-markdown";

const NoteOnTesting = () => (
  <>
    <ReactMarkdown>
      If you want to write unit tests while using the library, you must exclude
      *`react-context-slices`* from *`transformIgnorePatterns`* in *`jest`*
      configuration file:
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// jest.config.js
module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!(react-context-slices)/)"],
  // rest of configuration settings
};`}</CodeBlock>
    <ReactMarkdown>
      On React Native you should also exclude *`react-native`* from the list of
      *`transformIgnorePatterns`*:
    </ReactMarkdown>
    <CodeBlock className={styles.codeBlock}>{`// jest.config.js
module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!(react-context-slices|@react-native|react-native)/)",
  ],
  // rest of configuration settings
};`}</CodeBlock>
    <ReactMarkdown>
      Essentially what this tells is to not parse the *`node_modules`* folder
      except for *`react-context-slices`*. This is so because
      *`react-context-slices`* has *`import`* statements in it, and need to be
      parsed by *`tsc`* or *`babel`* when using *`jest`*.
    </ReactMarkdown>
  </>
);

export default NoteOnTesting;
