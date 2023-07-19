import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
const Layout = () => {
  return (
    <div className="bg-smoky-black flex md:flex-row flex-col  md:gap-8 gap-5 md:px-[30px] md:py-[60px] px-2 py-4  ">
      <div className="md:w-[30%] bg-eerie-black-2 rounded-[20px]  md:py-10  md:pl-0 box-shadow box-border min-h-[850px] max-h-[800px]  sticky top-0">
        <LeftBar />
      </div>
      <div className="w-full bg-eerie-black-1 rounded-[20px] box-shadow min-h-[850px]  navscr max-w-[70%]">
        <RightBar/>
      </div>
    </div>
  );
};

export default Layout;
