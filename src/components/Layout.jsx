import React from "react";
import LeftBar from "./LeftBar";
const Layout = () => {
  return (
    <div className="bg-smoky-black flex flex-cols gap-8 px-[30px] py-[60px] ">
      <div className="w-[350px] bg-eerie-black-2 rounded-[30px] border-white border py-10 px-[10px] ">
        <LeftBar />
      </div>
      <div className="w-full bg-eerie-black-1 rounded-[30px] border border-white">
        Right
      </div>
    </div>
  );
};

export default Layout;
