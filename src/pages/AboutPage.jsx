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
          A software engineer and MERN Stack Developer from Satna, Madhya
          Pradesh, India, I specialize in web development and design stuff. My
          passion is turning complex problems into simple, beautiful, and
          intuitive ones.
        </p>
        <p className="py-2 [15px] text-gray-300">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Also, I will add
          personal touches to your product and ensure that it is easy to use and
          eye-catching. Creating web design for a variety of good projects has
          been a part of my goal. I am focused on bringing across your message
          and identity creatively.
        </p>
        <p className="py-2 text-[15px] text-gray-300 ">
          Also, I am looking for an entry-level position as a Software
          Engineer/Software Engineer Intern in a dynamic firm that values my
          technical skills and gives me opportunities to update my knowledge. In
          addition to contributing to the company's growth, I am looking for a
          company that will enable me to grow personally at the same time.
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
