import React from "react";
import Swiper from "react-id-swiper";
import SliderItem from "./SliderItem";
import "../css/Slider.css";
import { v4 as uuidv4 } from "uuid";

const Slider = (props) => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    effect: "fade",
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // }
  };
  const { results } = props;

  return (
    <Swiper {...params}>
      {results.map((r) => (
        <div key={uuidv4()} className="Slider-slide">
          <SliderItem result={r} />
        </div>
      ))}
    </Swiper>
  );
};
export default Slider;
