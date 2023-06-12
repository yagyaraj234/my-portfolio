import React from "react";
import LeftBar from "./LeftBar";
const Layout = () => {
  return (
    <div className="bg-smoky-black flex md:flex-row flex-col  md:gap-8 gap-5 md:px-[30px] md:py-[60px] px-2 py-4 ">
      <div className="md:w-[350px] bg-eerie-black-2 rounded-[20px]  md:py-10  md:pl-0 box-shadow box-border ">
        <LeftBar />
      </div>
      <div className="w-full bg-eerie-black-1 rounded-[20px] box-shadow">
        Right
      </div>
    </div>
  );
};

export default Layout;
