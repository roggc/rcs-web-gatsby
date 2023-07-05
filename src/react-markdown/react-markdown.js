import RM from "react-markdown";
import * as styles from "./react-markdown.module.css";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as React from "react";

const ReactMarkdown = ({ children, ...props }) => {
  return (
    <RM
      components={{
        em: ({ node, ...props }) => <span className={styles.code} {...props} />,
        strong: ({ node, ...props }) => (
          <span className={styles.strong} {...props} />
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              className={styles.codeBlock}
              {...props}
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      rehypePlugins={[rehypeRaw]}
      {...props}
    >
      {children}
    </RM>
  );
};

export default ReactMarkdown;
