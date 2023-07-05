import { useSlice } from "../../../slices";
import * as styles from "./index-container.module.css";
import * as React from "react";

const IndexContainer = ({ children }) => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <div
      className={styles.presentationContainer}
      onClick={() => setIsShownMobileLateralMenu(false)}
    >
      {children}
    </div>
  );
};

export default IndexContainer;
