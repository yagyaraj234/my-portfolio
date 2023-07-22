import React from "react";
import { NavLink } from "react-router-dom";

const MobMenu = () => {
  return (
    <div className="fixed -bottom-1 left-0  w-full border-gray-600 px-10 border-b  rounded-t-[22px] border-l border-r z-20 bg-onyx">
      <ul className="flex justify-between gap-5 py-4 font-sans font-semibold">
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
  );
};

export default MobMenu;
