import { useSlice } from "../../slices";
import * as styles from "./mobile-lateral-menu.module.css";
import { Link } from "gatsby";
import * as React from "react";

const MobileLateralMenu = ({ location }) => {
  const [isShownMobileLateralMenu, setIsShownMobileLateralMenu] = useSlice(
    "isShownMobileLateralMenu"
  );
  const pathname = location.pathname;
  return (
    <div
      className={
        isShownMobileLateralMenu
          ? `${styles.mobileLateralMenu} ${styles.isShown}`
          : styles.mobileLateralMenu
      }
    >
      <Link
        to="/installation"
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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
        onClick={() => setIsShownMobileLateralMenu(false)}
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

export default MobileLateralMenu;
