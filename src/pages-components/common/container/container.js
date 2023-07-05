import * as styles from "./container.module.css";
import { useSlice } from "../../../slices";
import * as React from "react";

const Container = ({ children }) => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <div
      className={styles.container}
      onClick={() => setIsShownMobileLateralMenu(false)}
    >
      {children}
    </div>
  );
};

export default Container;
