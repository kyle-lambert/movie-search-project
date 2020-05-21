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
      slidesPerView: 0,
      sliderWidth: 0,
    };
  }

  setSliderWidth = () => {
    const slider = document.querySelector(".Slider");
    this.setState({ sliderWidth: slider.clientWidth });
  };

  setSlidesPerView = () => {
    const { sliderWidth } = this.state;
    let num = 0;

    switch (true) {
      case sliderWidth <= 425:
        num = 1;
        break;
      case sliderWidth > 425 && sliderWidth <= 768:
        num = 2;
        break;
      case sliderWidth > 768 && sliderWidth <= 1024:
        num = 3;
        break;
      case sliderWidth > 1024 && sliderWidth <= 1440:
        num = 4;
        break;
      default:
        num = 6;
        break;
    }
    this.setState({ slidesPerView: num });
  };

  componentDidMount() {
    this.setSliderWidth();
    this.setSlidesPerView();

    window.addEventListener("resize", () => {
      this.setSliderWidth();
      this.setSlidesPerView();

      this.setState((state) => ({
        ...state,
        translation: 0,
        transition: 0,
        activeIndex: 0,
      }));

      // add transition back after window resize
      setTimeout(() => {
        this.setState({ ...this.state, transition: 0.45 });
      }, 250);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sliderWidth !== this.state.sliderWidth) {
      this.setSlidesPerView();
    }
  }

  getWidth = () => this.state.sliderWidth / this.state.slidesPerView;

  nextSlide = () => {
    if (this.state.activeIndex === this.props.items.length - 1) {
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
        activeIndex: this.props.items.length - 1,
        translation: (this.props.items.length - 1) * this.getWidth(),
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
          width={(100 / this.state.slidesPerView) * this.props.items.length}>
          {this.props.items.map((item) => (
            <Slide
              key={item.id}
              item={item}
              width={100 / this.state.slidesPerView}
            />
          ))}
        </SliderContent>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </div>
    );
  }
}

export default Slider;
