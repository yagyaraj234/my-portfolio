import React from "react";
import Resume from "../YagyarajLodhiResume.pdf";

const ResumePage = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-white font-semibold mt-4 pb-4">Resume</h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>

      {/* Education Section  */}
      <div className="my-5 flex flex-row z-50">
        <div className="w-8 mr-5 icon-box-rs ">
          <ion-icon name="book-outline" size="large"></ion-icon>
        </div>
        <div className="line"></div>
        <div className="dot1"></div>
        <div className="dot2"></div>

        <div>
          <div className="flex flex-row gap-5">
            <h1 className="text-xl text-white font-bold">Education</h1>
          </div>
          <div>
            <div>
              <p className="my-2 mt-4 text-md text-gray-200 font-semibold">
                Gyan Ganga College of Technology
              </p>
              <p className=" text-vegas-gold text-[15px]">2019 - 2023</p>
              <p className="text-[15px] text-light-gray ">
                Bachelor of Technology, Computer Science Engineering.
              </p>
            </div>
            <div>
              <p className="my-2 mt-4 text-md text-gray-200 font-semibold">
                Satya Niketan Higher Secondary School
              </p>
              <p className=" text-vegas-gold text-[15px]">2016 - 2019</p>
              <p className="text-[15px] text-light-gray">
                Class X | Class XII (Science)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section  */}
      <div className="my-5 flex flex-row mt-10">
        <div className="w-8 mr-5 icon-box-rs ">
          {/* <ion-icon name="book-outline" size="large"></ion-icon> */}
          <ion-icon name="briefcase-outline" size="large"></ion-icon>
        </div>
        <div>
          <div className="flex flex-row gap-5 ">
            <h1 className="text-2xl text-white font-bold">Experience</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="my-2 mt-4 text-md text-gray-200 font-semibold">
                Rava.ai ( Software Developer)
              </p>
              <p className=" text-vegas-gold text-[15px]">Jan 2024 - Present</p>
              <ul className="text-[15px] text-light-gray list-disc ">
                <li className="my-1 list-  ">
                  Implemented a copilot and embedding feature, allowing users to
                  easily create content (using a template or manual input) for
                  their social platform and share it with their networks.
                </li>
                <li className="my-1">
                  Collaborated with the Data Science team to develop workflows
                  to automate personalized content for thousands of users.
                </li>
              </ul>
            </div>
            {/* <div>
              <p className="my-2 mt-4 text-md text-gray-200 font-semibold">
                Freelance Web Developer
              </p>
              <p className=" text-vegas-gold text-[15px]">2021 - Present</p>
              <p className="text-[15px] text-light-gray ">
                I am doing freelancing for dev and design related work.
              </p>
            </div> */}
            <div>
              <div>
                <p className="my-2 text-md text-gray-200 font-semibold">
                  Skillrazr (Full-Stack developer Intern)
                </p>
                <p className=" text-vegas-gold text-[15px]">
                  Oct 2023 - Dec 2023
                </p>

                <ul className="text-[15px] text-light-gray list-disc ">
                  <li className="my-1">
                    Developed a Cricket Team Rank Prediction game for the World
                    Cup 2023, focusing on accurate ranking predictions. Utilized
                    Node.js and Firebase to create APIs for seamless data
                    integration.
                  </li>
                  <li className="my-1">
                    Enhanced the Skillrazr platform’s user interface, ensuring
                    responsiveness and resolving styling issues for an improved
                    user experience.
                  </li>
                  <li className="my-1">
                    Designed an engaging SQL and Git playground, providing users
                    with a dynamic environment to actively enhance their SQL and
                    Git skills.
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="line-ex"></div>
      <div className="dot1-ex"></div>
      <div className="dot2-ex"></div>

      {/* Skill Section  */}
      <div>
        <p className="text-2xl text-white font-semibold my-10">My Skills</p>
        <div className="skill-box   ">
          <div className="w-full text-white px-5">
            <div className="my-4 relative">
              <p className="text-xl my-1 ">Data Structure Algorithm</p>
              <p className="b-2 bg-light-gray-70 rounded h-2 w-full"></p>
              <p className="b-2 absolute bottom-0 bg-orange-yellow-crayola rounded h-2 w-9/12"></p>
            </div>
            <div className="my-4 relative">
              <p className="text-xl ">MERN Stack Development</p>
              <p className="b-2 bg-light-gray-70 rounded h-2 w-full"></p>
              <p className="b-2 absolute bottom-0 bg-orange-yellow-crayola rounded h-2 w-10/12"></p>
            </div>
            <div className="my-4 relative">
              <p className="text-xl ">UI / UX</p>
              <p className="b-2 bg-light-gray-70 rounded h-2 w-full"></p>
              <p className="b-2 absolute bottom-0 bg-orange-yellow-crayola rounded h-2 w-11/12"></p>
            </div>
            <a href={Resume} download="YagyarajLodhiResume">
              <div className="text-lg float-right download-btn hover:text-vegas-gold transition-colors duration-150 text-center">
                <button className=" font-semibold text-[15px] text-center">
                  Download Resume
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
