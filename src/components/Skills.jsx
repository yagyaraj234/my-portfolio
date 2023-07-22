import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  html,
  css,
  sql,
  git,
  cpp,
  c,
  JS,
  reactimg,
  reduximg,
  mongoDB,
} from "../images/index";

const CarouselItem = [
  { id: 1, img: c, alt: "c-logo" },
  { id: 2, img: cpp, alt: "cpp-logo" },
  { id: 3, img: html, alt: "html-logo" },
  { id: 4, img: css, alt: "css-logo" },
  { id: 5, img: JS, alt: "javascript-logo" },
  { id: 6, img: reactimg, alt: "react-logo" },
  { id: 7, img: reduximg, alt: "redux-logo" },
  { id: 8, img: mongoDB, alt: "mongodb-logo" },
  { id: 9, img: sql, alt: "sql-logo" },
  { id: 10, img: git, alt: "git-logo" },
];

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="md:pb-5 pb-5">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {CarouselItem.map((item) => (
          <div key={item.id} className="w-6/12 mx-0 px-0">
            <img
              src={item.img}
              alt={item.alt}
              className="hover:grayscale cursor-pointer md:ml-[50px] ml-[80px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Skills;
