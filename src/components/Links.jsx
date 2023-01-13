import React from "react";

const Links = () => {
  return (
    <>
      <a
        target="_blank"
        className="w-full md:w-1/2 bg-white flex items-center justify-center h-12 p-1 my-2 rounded shadow-xl font-semibold text-medium hover:scale-105 duration-500"
        href="https://mitko-portfolio.netlify.app/"
      >
        My Personal Site
      </a>

      <a
        target="_blank"
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-1 h-12 my-2 rounded shadow-xl font-semibold text-medium hover:scale-105 duration-500 "
        href="https://www.instagram.com/ilievm10/"
      >
        Instagram
      </a>
      <a
        target="_blank"
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-1 h-12 my-2 rounded shadow-xl font-semibold text-medium hover:scale-105 duration-500 "
        href="https://www.linkedin.com/in/mitko-iliev/"
      >
        Linkedin
      </a>
      <a
        target="_blank"
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-1 h-12 my-2 rounded shadow-xl font-semibold text-medium hover:scale-105 duration-500 "
        href="https://github.com/devemit"
      >
        GitHub
      </a>
    </>
  );
};

export default Links;
