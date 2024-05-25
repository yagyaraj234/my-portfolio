import React from "react";
import Card from "../components/Card";
import icondesign from "../images/icon-design.svg";
import webDevelop from "../images/icon-dev.svg";
import Skills from "../components/Skills";

const cardData = [
  {
    id: 1,
    heading: "Data Structure & Algorithm",
    description:
      "A five-star coder on HackerRank. Have solved more than 300 Data Structure and Algorithm questions.",
    link: "https://hackerrank.com/yagyaraj234",
    img: icondesign,
  },
  {
    id: 2,
    heading: "MERN Stack Developer",
    description: "Developing professional Web applications of high quality. ",
    link: "https://github.com/yagyaraj234",
    img: webDevelop,
  },
];

const AboutPage = () => {
  const hello = "< Hello World/>";
  return (
    <div>
      <div>
        <h2 className="text-3xl text-white font-semibold mt-4 pb-4">
          About Me
        </h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>
      <div className="text-light-gray py-5 text-justify">
        <p className="text-xl font-bold">{hello}</p>

        <p className="py-2 [15px] text-gray-300 ">
          Welcome to my personal portfolio! I am a passionate software engineer
          and MERN Stack Developer based in Satna, Madhya Pradesh, India. My
          mission is to turn complex problems into simple, beautiful, and
          intuitive solutions through creative web development and design.
        </p>
        {/* <p className="py-2 [15px] text-gray-300">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Also, I will add
          personal touches to your product and ensure that it is easy to use and
          eye-catching. Creating web design for a variety of good projects has
          been a part of my goal. I am focused on bringing across your message
          and identity creatively.
        </p> */}
        {/* <p className="py-2 text-[15px] text-gray-300 ">
          Also, I am looking for an entry-level position as a Software
          Engineer/Software Engineer Intern in a dynamic firm that values my
          technical skills and gives me opportunities to update my knowledge. In
          addition to contributing to the company's growth, I am looking for a
          company that will enable me to grow personally at the same time.
        </p> */}
        <p className="py-2 text-[15px] text-gray-300 ">
          As a developer, I handle all aspects of web development, from design
          to implementation. My expertise lies in creating functional websites
          with a personal touch to ensure a unique user experience.
        </p>
        <p className="py-2 text-[15px] text-gray-300 ">
          I specialize in MERN Stack development, offering services in web
          design, e-commerce solutions, website optimization, and SEO strategies
          to enhance online visibility.
        </p>
        <p className="py-2 text-[15px] text-gray-300 ">
          I am committed to excellence in web development and design, aiming to
          exceed client expectations and deliver impactful solutions. Let's
          collaborate to bring your vision to life!
        </p>
      </div>

      <div>
        <p className="font-semibold text-white text-2xl">What I'm Doing</p>

        <div className="grid md:grid-cols-2">
          {cardData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-white text-2xl">Skills</p>
        <Skills />
      </div>
    </div>
  );
};

export default AboutPage;
