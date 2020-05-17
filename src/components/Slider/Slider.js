import React, { Component } from "react";

import "./Slider.css";

import SliderContent from "../SliderContent/SliderContent";
import Slide from "../Slide/Slide";
import Arrow from "../Arrow/Arrow";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      translation: 0,
      transition: 0.45,
      slidesPerView: 5,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState((prevState) => ({
        ...prevState,
        translation: prevState.activeIndex * this.getWidth(),
        transition: 0,
      }));

      // add transition back after window resize
      setTimeout(() => {
        this.setState({ ...this.state, transition: 0.45 });
      }, 250);
    });
  }

  getWidth = () => window.innerWidth / this.state.slidesPerView;

  nextSlide = () => {
    if (this.state.activeIndex === 6 - 1) {
      return this.setState({
        ...this.state,
        translation: 0,
        activeIndex: 0,
      });
    }

    this.setState((prevState) => ({
      ...prevState,
      activeIndex: prevState.activeIndex + 1,
      translation: (prevState.activeIndex + 1) * this.getWidth(),
    }));
  };

  prevSlide = () => {
    if (this.state.activeIndex === 0) {
      return this.setState({
        ...this.state,
        activeIndex: 6 - 1,
        translation: (6 - 1) * this.getWidth(),
      });
    }

    this.setState((prevState) => ({
      ...prevState,
      activeIndex: prevState.activeIndex - 1,
      translation: (prevState.activeIndex - 1) * this.getWidth(),
    }));
  };

  render() {
    return (
      <div className="Slider">
        <SliderContent
          translation={this.state.translation}
          transition={this.state.transition}
          width={(100 / this.state.slidesPerView) * 6}>
          <Slide key="1" width={100 / this.state.slidesPerView} color="red" />
          <Slide key="2" width={100 / this.state.slidesPerView} color="green" />
          <Slide key="3" width={100 / this.state.slidesPerView} color="blue" />
          <Slide key="4" width={100 / this.state.slidesPerView} color="coral" />
          <Slide
            key="5"
            width={100 / this.state.slidesPerView}
            color="orange"
          />
          <Slide key="6" width={100 / this.state.slidesPerView} color="teal" />
        </SliderContent>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </div>
    );
  }
}

export default Slider;
