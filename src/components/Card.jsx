import React from "react";

const Card = ({ data }) => {
  return (
    <div key={data.id} className=" text-white-1 py-5 ">
      <div className="flex gap-5">
        <div className="pt-2">
          <img src={data.img} alt="icon-img" />
        </div>
        <div>
          <p className="text-lg font-semibold">{data.heading}</p>
          <p className=" text-[15px] text-gray-300">{data.description}</p>
          <a href={data.link} className="font-bold text-gray-200">
            Check here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
