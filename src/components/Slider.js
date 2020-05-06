import React, { Component } from "react";
import styled from "styled-components";

import SliderContent from "../components/SliderContent";
import Slide from "../components/Slide";
import Arrow from "../components/Arrow";

const Wrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      translation: 0,
      transition: 0.45,
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

  getWidth = () => window.innerWidth;

  nextSlide = () => {
    if (this.state.activeIndex === this.props.slides.length - 1) {
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
        activeIndex: this.props.slides.length - 1,
        translation: (this.props.slides.length - 1) * this.getWidth(),
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
      <Wrapper>
        <SliderContent
          translation={this.state.translation}
          transition={this.state.transition}
          width={this.getWidth() * this.props.slides.length}>
          {this.props.slides.map((slide) => (
            <Slide key={slide.id} content={slide} />
          ))}
        </SliderContent>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </Wrapper>
    );
  }
}

export default Slider;
