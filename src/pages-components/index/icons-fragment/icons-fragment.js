import * as styles from "./icons-fragment.module.css";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import * as React from "react";

const IconsFragment = () => (
  <>
    <FaReact className={styles.faReact} />
    <SiRedux className={styles.siRedux} />
  </>
);

export default IconsFragment;
