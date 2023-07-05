import { FaGithub, FaNpm } from "react-icons/fa";
import * as styles from "./icons-fragment-npm.module.css";
import { openInNewTab } from "../../../utils";
import * as React from "react";

const IconsFragmentNpm = () => {
  return (
    <>
      <FaGithub
        className={styles.faGithub}
        onClick={() =>
          openInNewTab("https://github.com/roggc/react-context-slices")
        }
      />
      <FaNpm
        className={styles.faNpm}
        onClick={() =>
          openInNewTab("https://www.npmjs.com/package/react-context-slices")
        }
      />
    </>
  );
};

export default IconsFragmentNpm;
