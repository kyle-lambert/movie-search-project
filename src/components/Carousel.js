import React from "react";
import Swiper from "react-id-swiper";
import "../css/Carousel.css";

const Carousel = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true
    }
  };
  return (
    <Swiper {...params}>
      <div className="slide">Slide #1</div>
      <div className="slide">Slide #2</div>
      <div className="slide">Slide #3</div>
      <div className="slide">Slide #4</div>
      <div className="slide">Slide #5</div>
    </Swiper>
  );
};
export default Carousel;
