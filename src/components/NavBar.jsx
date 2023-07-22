import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import MobMenu from "./MobMenu";
import DesktopMenu from "./DesktopMenu";
import {
  AboutPage,
  ResumePage,
  ContactPage,
  ProjectPage,
} from "../pages/index";

import { Route, Routes } from "react-router-dom";

const NavBar = () => {
  const [screen, setScreen] = useState(window.screen.width);

  const widthResize = () => {
    setScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    };
  }, [screen]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      {screen <= "480" ? <MobMenu /> : <DesktopMenu />}
    </div>
  );
};

export default NavBar;
