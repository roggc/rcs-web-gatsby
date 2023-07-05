import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";

const License = () => (
  <>
    <div>
      Licensed under the ISC License, Copyright © 2022-present Roger Gomez
      Castells.
    </div>
    <div>
      See{" "}
      <a
        className={styles.anchor}
        href="https://github.com/roggc/react-context-slices/blob/master/LICENSE"
        target="_blank"
      >
        LICENSE
      </a>{" "}
      for more information.
    </div>
  </>
);

export default License;
