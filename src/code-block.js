import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as React from "react";

const CodeBlock = ({ children, language = "javascript", ...props }) => {
  return (
    <div>
      <SyntaxHighlighter language={language} style={vscDarkPlus} {...props}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
