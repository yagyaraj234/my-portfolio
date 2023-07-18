import React from "react";

const Card = ({ data }) => {
  return (
    <div key={data.id} className=" text-white-1 p-5 ">
      <div className="flex gap-5">
        <div className=" pt-2">
          <img src={data.img} alt="icon-img" />
        </div>
        <div>
          <p className="text-xl font-semibold">{data.heading}</p>
          <p className="text-white-2">{data.description}</p>
          <a href={data.link} className="font-bold">
            Check here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
