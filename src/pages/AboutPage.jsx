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

        <p className="py-2 text-[17px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
          maxime officia accusamus mollitia expedita. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ipsam fugiat aperiam quos animi
        </p>
        <p className="py-2 text-[17px] ">
          dignissimos eos temporibus quis quibusdam vel minus blanditiis quidem
          Necessitatibus dolor, repellat suscipit dolorum rerum, corrupti
          explicabo fuga officiis sapiente eligendi, nam sunt ipsum maiores
          atque. Praesentium cumque aliquam aut mollitia illum ratione, nulla
          pariatur doloribus molestias? Repellendus et vero saepe amet sequi
          asperiores impedit dicta quo, earum illo illum culpa voluptatum,
        </p>
        <p className="py-2 text-[17px] ">
          {" "}
          Quos facilis asperiores natus quidem ab repellendus minus beatae ea
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
