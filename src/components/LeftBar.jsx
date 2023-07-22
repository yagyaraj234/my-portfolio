import React, { useState } from "react";
import user from "../images/user-image.webp";
import phone from "../images/icon-app.svg";
import calender from "../images/calendar-outline.svg";
import location from "../images/location-outline.svg";
import mail from "../images/mail-outline.svg";
import UserInfo from "./UserInfo";

const LeftBar = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    // <div className="flex flex-col">
    <div className=" flex  flex-col justify-center  overflow-hidden ">
      {/* USer Info 1  */}
      <div className=" md:pt-5 flex md:flex-col flex-row justify-center items-center overflow-hidden pl-5 md:pl-0  ">
        <div className="pt-5 md:pt-8 md:pr-2 overflow-hidden rounded-[20px] md:w-[150px] md:h-[150px] w-[120px] h-[90px]">
          <img src={user} alt="user-img" className=" scale-150 " />
        </div>
        {/* Useinfo  */}
        <div className="flex md:flex-col flex-col md:text-center md:py-5  py-2 border-cynx w-full md:pb-5 md:pr-0 pr-10 ">
          <div className=" flex flex-col md:justify-center justify-start pl-5 md:pl-0  ">
            <p className="md:text-2xl text-md md:text-center text-left pb-1  text-white-1 w-full md:pl-0 pl-2 ">
              Yagyaraj Lodhi
            </p>
            <p className="text-white-2  py-1 font-light bg-onyx rounded-md  my-2 md:my-4 md:w-3/6 w-[115px] md:mx-auto md:text-sm text-xs md:pl ml-2  text-center">
              {" "}
              &nbsp; Software Engineer
            </p>
            <p className="text-white-2  py-1 font-light bg-onyx rounded-md  md:w-3/6 w-[115px] md:text-sm text-center text-xs md:mx-auto ml-2 ">
              &nbsp; MERN  Developer
            </p>
          </div>
        </div>
        <div
          onClick={() => setMobileView(!mobileView)}
          className="info_more-btn hid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {mobileView && <UserInfo hidd="d" />}
      <UserInfo hidd="hidd" />
    </div>
    // </div>
  );
};

export default LeftBar;
