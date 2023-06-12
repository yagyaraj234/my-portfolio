import React from "react";
// import logo from '../../public/images/avatar-1.png'
import roktimdp from "../images/roktimdp.png";
// import  write from '../images/icon-design.svg'
import phone from "../images/icon-app.svg";
import calender from "../images/calendar-outline.svg";
import location from "../images/location-outline.svg";
import mail from "../images/mail-outline.svg";

const leftBar = [
  {
    icon: "mail",
    name: "email",
    namedata: "workygayaraj@gmail.com",
    "ion-icon": "email-outline",
  },
  { icon: "phone", name: "phone", namedata: "+91 7566965886" },
  { icon: "calender", name: "Birthday", namedata: "23rd April" },
  {
    icon: "location",
    name: "location",
    namedata: "Satna, Madhya Pradesh, INDIA",
  },
];
const LeftBar = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* USe image  */}
      <div className="pt-5">
        <img
          src={roktimdp}
          alt="user-img"
          className="w-[180px] rounded-[30px]"
        />
      </div>
      {/* Useinfo  */}
      <div className=" text-center py-5 border-b border-cynx w-full pb-10">
        <p className="text-3xl text-white-1 w-full">Yagyaraj Lodhi</p>
        <p className="text-white-2  py-1 font-thin bg-onyx rounded-lg my-4 w-[150px] mx-auto text-sm">
          Software Engineer
        </p>
        <p className="text-white-2  py-1 font-thin bg-onyx rounded-lg  w-3/4 mx-auto text-sm">
          MERN Stack Developer
        </p>
      </div>
      {/* User Detail Icon  Start    */}
      <div className="py-10">
        {/* Mail Icon  */}
        <div className="flex  py-4  gap-2 ">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
            <img className="p-3" src={mail} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 text-[12px] ">EMAIL</p>
            <p className="text-light-gray text-[14px]">
              workyagyaraj@gmail.com
            </p>
          </div>
        </div>
        {/* Phone Icon  */}
        <div className="flex py-4   gap-2 ">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
            <img className="p-3 " src={phone} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 text-[12px] ">PHONE</p>
            <p className="text-light-gray text-[14px]">+91 7566965886</p>
          </div>
        </div>
        {/* Calender Icon  */}
        <div className="flex py-4   gap-2 ">
          <div className="icon-box">
            <ion-icon name="calender-outline"></ion-icon>
            <img className="p-3" src={calender} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 text-[12px] ">Birthday</p>
            <p className="text-light-gray text-[14px]">23rd &nbsp; April </p>
          </div>
        </div>
        {/* Location Icon  */}
        <div className="flex py-4   gap-2 ">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
            <img className="p-3" src={location} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 text-sm ">Location</p>
            <p className="text-light-gray">
              Satna, Madhya Pradesh <br /> INDIA
            </p>
          </div>
        </div>
        {/* {leftBar?.map((name) => (
          <div key={name} className="flex py-4   gap-2 ">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
              <img className="p-3" src={name.icon} alt="mail-icon" />
            </div>
            <div>
              <p className="text-light-gray-70 text-sm uppercase ">{name.name}</p>
              <p className="text-light-gray">
                {name.namedata}
              </p>
            </div>
          </div>
        ))} */}
      </div>
      {/* User Detail Icon  End    */}

      {/* User Links start  */}
      <div className="flex stroke-white">
        <div className="stroke-white">
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>

        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
      </div>
      {/* User Links End */}
    </div>
  );
};

export default LeftBar;
