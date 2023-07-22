import React, { useState } from "react";
import { project1, project2, project3 } from "../images/project";

const projectData = [
  {
    id: 1,
    name: "ShoeUp",
    git: "https://github.com/yagyaraj234/shoeup",
    img: project1,
    live: "https://shoeup.vercel.app",
  },
  {
    id: 2,
    name: "CoinfolioX",
    git: "https://github.com/yagyaraj234/coinfolioX",
    img: project2,
    live: "https://coinfolioX.vercel.app",
  },
  {
    id: 3,
    name: "Git stats Checker",
    git: "https://github.com/yagyaraj234/git-stats-checker",
    img: project3,
    live: "https://git-stats-checker.vercel.app",
  },
];

const ProjectPage = () => {
  const [hoverStates, setHoverStates] = useState(projectData.map(() => false));

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl text-white font-semibold mt-4 pb-4">
          Projects{" "}
        </h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>

      <div className="mt-10 grid grid-col md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
        {projectData.map((proj, index) => (
          <div className="flex flex-col items-center " key={proj.id}>
            <div
              className="rounded-lg cursor-pointer relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={proj.img}
                alt="Project-img"
                className="h-[140px] md:h-[120px] w-[250px] rounded-lg    hover:opacity-75 hover:scale-125 transition duration-500   "
              />
              {hoverStates[index] ? (
                <div className="px-5 absolute top-12  md:top-10 z-10 text-center">
                  <div className="flex flex-row justify-between lg:w-[140px] w-[200px]">
                    <a
                      href={proj.git}
                      className="bg-white text-black rounded-lg px-3 py-1 hover:bg-onyx transition-colors duration-75 hover:text-white border border-black"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a
                      className="bg-white text-black rounded-lg px-3 py-1 hover:bg-onyx transition-colors duration-75 hover:text-white border border-black"
                      target="_blank"
                      rel="noreferrer"
                      href={proj.live}
                    >
                      <ion-icon name="open-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col  items-center my-2">
              <p className="font-semibold text-white ">{proj.name}</p>
              <p className="text-light-gray-70">Web App</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
