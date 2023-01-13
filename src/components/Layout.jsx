import React from "react";
import Image from "./Image";
import Links from "./Links";
import Socials from "./Socials";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 h-screen mx-auto p-12 mt-18 flex flex-col justify-center items-center">
      {children}
      <Image />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
};

export default Layout;
