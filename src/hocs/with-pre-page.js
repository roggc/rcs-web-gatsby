import * as React from "react";
import PrePage from "../pages-components/common/pre-page";

export const withPrePage =
  (Component) =>
  ({ location }) => {
    return (
      <PrePage location={location}>
        <Component />
      </PrePage>
    );
  };
