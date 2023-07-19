import React from "react";

const ResumePage = () => {

  const onButtonClick =()=>{
    fetch('../YagyarajLodhiresume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'YagyarajLodhiResume.pdf';
          alink.click();
      })
  })
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl text-white font-semibold mt-4 pb-4">Resume</h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>

      {/* Education Section  */}
      <div className="my-5 flex flex-row">
        <div className="w-8 mr-5 icon-box-rs">
          <ion-icon name="book-outline" size="large"></ion-icon>
        </div>

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
      </div>

      {/* Experience Section  */}
      <div className="my-5 flex flex-row mt-10">
        <div className="w-8 mr-5 icon-box-rs ">
          <ion-icon name="book-outline" size="large"></ion-icon>
        </div>
        <div>
          <div className="flex flex-row gap-5 ">
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
                  <li>
                    {" "}
                    • Made UI designs for several projects of the company.
                  </li>
                  <li> • Fixed bugs of the Frontend part of the projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="text-lg float-right download-btn hover:text-vegas-gold transition-colors duration-150">
              <button className=" font-semibold"><a href="../YagyarajLodhiresume.pdf" download='YagyarajLodhiresume.pdf' target="_blank">Download Resume</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
