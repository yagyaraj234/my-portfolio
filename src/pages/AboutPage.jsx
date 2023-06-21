import React from "react";

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
          omnis corrupti? Hic in recusandae libero dolorum ut autem doloribus
          inventore cupiditate sapiente, consectetur, possimus reprehenderit
          maxime officia accusamus mollitia expedita. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ipsam fugiat aperiam quos animi
        </p>
        <p className="py-2 text-[17px] ">
          dignissimos eos temporibus quis quibusdam vel minus blanditiis quidem
          saepe accusantium magni voluptatibus modi tempora, nam iste omnis
          itaque. Obcaecati eos doloribus atque illum adipisci veniam!
          Necessitatibus dolor, repellat suscipit dolorum rerum, corrupti
          explicabo fuga officiis sapiente eligendi, nam sunt ipsum maiores
          atque. Praesentium cumque aliquam aut mollitia illum ratione, nulla
          pariatur doloribus molestias? Repellendus et vero saepe amet sequi
          asperiores impedit dicta quo, earum illo illum culpa voluptatum,
        </p>
        <p className="py-2 text-[17px] ">
          {" "}
          Quos facilis asperiores natus quidem ab repellendus minus beatae ea
          explicabo adipisci. Vitae voluptas veritatis nostrum aut, esse amet
          distinctio exercitationem voluptatum iure cum officia explicabo
          expedita.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white text-2xl">What I'm Doing</p>
      </div>
    </div>
  );
};

export default AboutPage;
