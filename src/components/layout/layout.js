import * as styles from "./layout.module.css";
import { useMediaQuery } from "react-responsive";
import * as React from "react";
import LateralMenu from "../lateral-menu/lateral-menu";
import "./index.css";
import Header from "../header/header";
import MobileLateralMenu from "../mobile-lateral-menu/mobile-lateral-menu";

const Layout = ({ children, location }) => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 850 });
  return isDesktopOrTablet ? (
    <div className={styles.appContainer}>
      <LateralMenu location={location} />
      <div className={styles.pageContent}>{children}</div>
    </div>
  ) : (
    <>
      <div className={`${styles.appContainer} ${styles.mobileAppContainer}`}>
        <Header />
        <div className={styles.mobilePageContent}>
          <MobileLateralMenu location={location} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
