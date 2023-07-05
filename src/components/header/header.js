import { useSlice } from "../../slices";
import * as styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { FaReact, FaGithub, FaNpm } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { Link } from "gatsby";
import { openInNewTab } from "../../utils";
import * as React from "react";

const Header = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>
        <FiMenu
          className={styles.fiMenu}
          onClick={() => setIsShownMobileLateralMenu((v) => !v)}
        />
        <div
          className={styles.headerTitle}
          onClick={() => setIsShownMobileLateralMenu(false)}
        >
          <div className={styles.iconsContainer}>
            <FaReact className={styles.faReact} />
            <SiRedux className={styles.siRedux} />
          </div>
          <Link to="/" className={styles.link}>
            react-context-slices
          </Link>
        </div>
      </div>
      <div className={styles.headerRightContainer}>
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
      </div>
    </div>
  );
};

export default Header;
