import React from "react";

const ResumePage = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-white font-semibold mt-4 pb-4">Resume</h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>

      <div className="my-5 flex flex-col">
        {/* Education Section  */}
        <div>
          <div className="flex flex-row gap-5">
            <h1 className="text-2xl text-white font-bold">Education</h1>
          </div>
          <div>
            <div>
              <p className="my-3 text-xl text-white font-semibold">
                Gyan Ganga College of Technology
              </p>
              <p className=" text-vegas-gold">2019 - 2023</p>
              <p className="text-md text-light-gray ">
                Bachelor of Technology. Currently pursuing Bachelors in Computer
                Science.
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-white font-semibold">
                Satya Niketan Higher Secondary School
              </p>
              <p className=" text-vegas-gold">2016 - 2019</p>
              <p className="text-md text-light-gray">
                Class X | Class XII (Science)
              </p>
            </div>
          </div>
        </div>
        {/* Experience Section  */}
        <div>
          <div className="flex flex-row gap-5 mt-10">
            <h1 className="text-2xl text-white font-bold">Experience</h1>
          </div>
          <div>
            <div>
              <p className="my-3 text-xl text-white font-semibold">
                Freelancer Web Developer
              </p>
              <p className=" text-vegas-gold">2021 - Present</p>
              <p className="text-md text-light-gray ">
                I am doing freelancing for dev and design related work.
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-white font-semibold">
                Oasis Infobyte Web developer Intern
              </p>
              <p className=" text-vegas-gold">March-April 2022</p>

              <ul className="text-md text-light-gray ">
                <li>
                  {" "}
                  • Developed Full-Stack Website Using HTML,CSS,Javascript.{" "}
                </li>
                <li> • Made UI designs for several projects of the company.</li>
                <li> • Fixed bugs of the Frontend part of the projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
