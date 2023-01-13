import React from "react";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-white flex ml-2">
        Linktree
        <SiLinktree size={20} className="ml-1" />
      </h1>
    </div>
  );
};

export default Footer;
