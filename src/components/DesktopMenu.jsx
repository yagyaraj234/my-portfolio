import React from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <>
      <div className="absolute md:top-0  border-gray-600  right-0 px-10 border-b rounded-bl-3xl rounded-tr-[22px] border-l z-10 bg-onyx">
        <ul className="flex gap-10 py-5 font-sans font-semibold">
          <NavLink
            className=" hover:text-light-gray-70 cursor-pointer transition-colors  duration-300 text-light-gray "
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className=" hover:text-light-gray-70 cursor-pointer transition-colors  duration-300 text-light-gray"
            to="/resume"
          >
            Resume
          </NavLink>
          <NavLink
            className=" hover:text-light-gray-70 cursor-pointer transition-colors  duration-300 text-light-gray"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className=" hover:text-light-gray-70 cursor-pointer transition-colors  duration-300 text-light-gray"
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
