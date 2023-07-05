import * as React from "react";
import Layout from "../../components/layout/layout";
import Container from "./container/container";

const PrePage = ({ location, children }) => {
  return (
    <Layout location={location}>
      <Container>{children}</Container>
    </Layout>
  );
};

export default PrePage;
