import React from "react";
import { NavLink } from "react-router-dom";
import {
  AboutPage,
  ResumePage,
  ContactPage,
  ProjectPage,
} from "../pages/index";

import { Route, Routes } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

      <div className="absolute top-0 border-gray-600  right-0 px-10 border-b rounded-bl-3xl rounded-tr-[22px] border-l z-10 bg-onyx">
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
    </div>
  );
};

export default NavBar;
