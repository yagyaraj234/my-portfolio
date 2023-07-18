import React,{useState} from "react";
import user from "../images/user-image.webp";
import phone from "../images/icon-app.svg";
import calender from "../images/calendar-outline.svg";
import location from "../images/location-outline.svg";
import mail from "../images/mail-outline.svg";
// import instagram from "../images/icons/logo-linkedin.svg";
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

  const [mobileView,setMobileView] =useState(false);
  return (
    // <div className="flex flex-col">
    <div className=" flex  flex-col justify-center  overflow-hidden relative">
      {/* USer Info 1  */}
      <div className=" md:pt-5 flex md:flex-col flex-row justify-center items-center overflow-hidden pl-5 md:pl-0 ">
        <div className="pt-5 md:pt-8 md:pr-2 overflow-hidden rounded-[20px] md:w-[150px] md:h-[150px] w-[120px] h-[90px]">
          <img src={user} alt="user-img" className=" scale-150 " />
        </div>
        {/* Useinfo  */}
        <div className="flex md:flex-col flex-col md:text-center md:py-5  py-2 border-cynx w-full md:pb-5 md:pr-0 pr-10 ">
          <div className=" flex flex-col md:justify-center justify-start pl-5 md:pl-0  ">
            <p className="md:text-2xl text-md md:text-center text-left pb-1  text-white-1 w-full md:pl-0 pl-2 ">
              Yagyaraj Lodhi
            </p>
            <p className="text-white-2  py-1 font-light bg-onyx rounded-lg  my-2 md:my-4 md:w-3/6 w-[115px] md:mx-auto md:text-sm text-xs md:pl ml-2 ">
              {" "}
              &nbsp; Software Engineer
            </p>
            <p className="text-white-2  py-1 font-light bg-onyx rounded-lg  md:w-4/6  w-[142px] md:text-sm text-xs mx-auto ">
              &nbsp; MERN Stack Developer
            </p>
          </div>
        </div>
        <div onClick={()=>setMobileView(!mobileView)} className="info_more-btn hid">
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

      <p className="border-b border-light-gray-70  w-10/12  mx-auto"></p>

      {/* User Detail Icon  Start    */}

      <div className="md:py-10 py-3     flex-col flex  px-5 ">
        {/* Mail Icon  */}
        <div className="flex  md:py-4 gap-2 ">
          <div className="icon-box ">
            <img className="p-1" src={mail} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 font-semibold  text-[12px] ">EMAIL</p>

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
            <p className="text-light-gray-70 font-semibold text-[12px]  ">PHONE</p>
            <p className="text-light-gray text-[15px]">+91 7566965886</p>
          </div>
        </div>
        {/* Calender Icon  */}
        <div className="flex md:py-4 py-1   gap-2 ">
          <div className="icon-box">
            <img className="p-1 " src={calender} alt="mail-icon" />
          </div>
          <div>
            <p className="text-light-gray-70 font-semibold uppercase text-[12px] ">Birthday</p>
            <p className="text-light-gray font-semibold  text-[15px]">23rd &nbsp; April </p>
          </div>
        </div>
        {/* Location Icon  */}
        <div className="flex md:py-4 py-1  gap-2  ">
          <div className="icon-box">
            <img className="p-1" src={location} alt="mail-icon" />
          </div>
          <div className="overflow-hidden">
            <p className="text-light-gray-70 font-semibold  uppercase text-sm ">Location</p>
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
    // </div>
  );
};

export default LeftBar;
