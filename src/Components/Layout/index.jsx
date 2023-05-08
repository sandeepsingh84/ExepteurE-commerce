import React from "react";
import { Header } from "../../Header";
import { Navbar } from "../../Header/Navbar";
import Footermain from "../Footer/Footermain";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footermain />
    </div>
  );
};

export default Layout;
