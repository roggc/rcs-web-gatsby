import { Link } from "gatsby";
import * as styles from "./lateral-menu.module.css";
import * as React from "react";
import IconsFragmentNpm from "./icons-fragment-npm/icons-fragment-npm";
import IconsFragmentReact from "./icons-fragment-react/icons-fragment-react";

const LateralMenu = ({ location }) => {
  const pathname = location.pathname;
  return (
    <div className={styles.lateralMenu}>
      <div className={styles.titleContainer}>
        <IconsFragmentReact />
        <Link className={`${styles.link} ${styles.title}`} to="/">
          react-context-slices
        </Link>
      </div>
      <div className={styles.iconsContainer}>
        <IconsFragmentNpm />
      </div>
      <Link
        to="/installation"
        className={
          pathname.startsWith("/installation")
            ? `${styles.link} active`
            : styles.link
        }
      >
        Installation
      </Link>
      <Link
        to="/how-to-use-it-javascript"
        className={
          pathname.startsWith("/how-to-use-it-javascript")
            ? `${styles.link} active`
            : styles.link
        }
      >
        How to use it (javascript)
      </Link>
      <Link
        to="/how-to-use-it-typescript"
        className={
          pathname.startsWith("/how-to-use-it-typescript")
            ? `${styles.link} active`
            : styles.link
        }
      >
        How to use it (typescript)
      </Link>
      <Link
        to="/get-initial-state-from-storage"
        className={
          pathname.startsWith("/get-initial-state-from-storage")
            ? `${styles.link} active`
            : styles.link
        }
      >
        Get initial state from storage (React Context slices)
      </Link>
      <Link
        to="/define-middleware"
        className={
          pathname.startsWith("/define-middleware")
            ? `${styles.link} active`
            : styles.link
        }
      >
        Define middleware (React Context slices)
      </Link>
      <Link
        to="/pass-options-to-redux-store"
        className={
          pathname.startsWith("/pass-options-to-redux-store")
            ? `${styles.link} active`
            : styles.link
        }
      >
        Pass options to Redux store
      </Link>
      <Link
        to="/things-you-can-do"
        className={
          pathname.startsWith("/things-you-can-do")
            ? `${styles.link} active`
            : styles.link
        }
      >
        Things you can do
      </Link>
      <Link
        to="/note-on-nomenclature"
        className={
          pathname.startsWith("/note-on-nomenclature")
            ? `${styles.link} active`
            : styles.link
        }
      >
        A note on nomenclature (React Context slices)
      </Link>
      <Link
        to="/note-on-testing"
        className={
          pathname.startsWith("/note-on-testing")
            ? `${styles.link} active`
            : styles.link
        }
      >
        A note on testing
      </Link>
      <Link
        to="/api-reference"
        className={
          pathname.startsWith("/api-reference")
            ? `${styles.link} active`
            : styles.link
        }
      >
        API reference
      </Link>
      <Link
        to="/license"
        className={
          pathname.startsWith("/license")
            ? `${styles.link} active`
            : styles.link
        }
      >
        License
      </Link>
    </div>
  );
};

export default LateralMenu;
