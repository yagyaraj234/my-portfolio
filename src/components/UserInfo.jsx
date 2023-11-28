import React from "react";
import phone from "../images/icon-app.svg";
import location from "../images/location-outline.svg";
import mail from "../images/mail-outline.svg";

const UserInfo = ({ hidd }) => {
  return (
    <div className={`${hidd}`}>
      {" "}
      <p className="border-b border-light-gray-70  w-10/12  mx-auto"></p>
      {/* User Detail Icon  Start    */}
      <div className="md:py-8 py-3   flex-col flex  px-5 ">
        {/* Mail Icon  */}
        <div className="flex  md:py-4 gap-2 ">
          <div className="icon-box ">
            <img className="p-1" src={mail} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 font-semibold  text-[12px] ">
              EMAIL
            </p>

            <a
              className="text-light-gray font-semibold text-[15px]"
              href="mailto:workyagyaraj@gmail.com"
            >
              workyagyaraj@gmail.com
            </a>
          </div>
        </div>
        {/* Phone Icon  */}
        <div className="flex md:py-4 py-1   gap-2 ">
          <div className="icon-box">
            <img className="p-1" src={phone} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 font-semibold text-[12px]  ">
              PHONE
            </p>
            <p className="text-light-gray text-[15px] ">+91 7566965886</p>
          </div>
        </div>
        {/* Calender Icon  */}
        <div className="flex md:py-4 py-1   gap-2 ">
          <div className="icon-box">
            {/* <img className="p-1 " src={calender} alt="mail-icon" /> */}
            <div className="text-xl  md:text-2xl">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
          </div>
          <div>
            <p className="text-light-gray-70 font-semibold uppercase text-[12px] ">
              Birthday
            </p>
            <p className="text-light-gray font-semibold  text-[15px]">
              23rd April{" "}
            </p>
          </div>
        </div>
        {/* Location Icon  */}
        <div className="flex md:py-4 py-1  gap-2  ">
          <div className="icon-box">
            <img className="p-1" src={location} alt="mail-icon" />
          </div>
          <div className="overflow-hidden">
            <p className="text-light-gray-70 font-semibold  uppercase text-sm ">
              Location
            </p>
            <p className="text-light-gray font-semibold  text-[14px]">
              Satna, Madhya Pradesh INDIA
            </p>
          </div>
        </div>
      </div>
      {/* User Detail Icon  End    */}
      <p className="border-b hid  mb-4 border-light-gray-70 w-10/12 mx-auto "></p>
      {/* User Links start  */}
      <div className="flex md:justify-center justify-start px-6 pb-5 md:pb-0 social-item">
        <div className="social-link">
          <div className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/yagyaraj234"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <div className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/yagyaraj234"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <div className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/yagyaraj234"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
          <div className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/yagyaraj234"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <div className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/917566965886"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      {/* User Links End */}
    </div>
  );
};

export default UserInfo;
