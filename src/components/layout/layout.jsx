import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children}) => {
  return (
    <div>
      <Header  />
      {children}
      {/* <Footer products={products} /> */}
    </div>
  );
};

export default Layout;
