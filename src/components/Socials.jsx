import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <div className=" flex p-4 my-10">
      <a href="https://github.com/devemit" target="_blank">
        <AiFillGithub
          size={35}
          className="text-white mx-2 hover:text-gray-800 cursor-pointer hover:scale-105 duration-300"
        />
      </a>
      <a href="https://www.linkedin.com/in/mitko-iliev/" target="_blank">
        <AiFillLinkedin
          size={35}
          className="text-white mx-2 hover:text-gray-800 cursor-pointer hover:scale-105 duration-300"
        />
      </a>
      <a href="https://www.instagram.com/ilievm10/" target="_blank">
        <AiFillInstagram
          size={35}
          className="text-white mx-2 hover:text-gray-800 cursor-pointer hover:scale-105 duration-300"
        />
      </a>
    </div>
  );
};

export default Socials;
