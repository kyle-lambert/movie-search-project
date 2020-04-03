import React from "react";
import Swiper from "react-id-swiper";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import "../css/Carousel.css";

const Carousel = props => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
      1502: {
        slidesPerView: 6,
        spaceBetween: 30
      },
      1266: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      395: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      328: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  };
  const { results, type } = props;

  return (
    <Swiper {...params}>
      {results.map(r => (
        <div key={uuidv4()} className="Carousel-slide">
          <CarouselCard result={r} type={type} />
        </div>
      ))}
    </Swiper>
  );
};
export default Carousel;
