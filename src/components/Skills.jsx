import React from "react";
import Carousel from "react-grid-carousel";
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
  return (
    <Carousel cols={4} rows={1} mobileBreakpoint={2} gap={10}>
      {CarouselItem.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            src={item.img}
            alt={item.alt}
            className="hover:grayscale cursor-pointer"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Skills;
