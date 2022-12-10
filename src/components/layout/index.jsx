import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
