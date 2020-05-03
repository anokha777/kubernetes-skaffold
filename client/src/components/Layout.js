import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const layout = props => (
  <>
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </>
);

export default layout;
