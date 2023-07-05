import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import * as styles from "./icons-fragment-react.module.css";
import * as React from "react";

const IconsFragmentReact = () => {
  return (
    <>
      <FaReact className={styles.faReact} />
      <SiRedux className={styles.siRedux} />
    </>
  );
};

export default IconsFragmentReact;
