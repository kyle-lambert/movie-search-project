import React, { Component } from "react";
import "../css/Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
  }

  nextSlide() {
    console.log("nextslide");
    console.log(this.props.content.length);
    console.log(this.state.currentIndex);
    if (this.state.currentIndex < this.props.content.length - 1) {
      this.setState(state => ({ currentIndex: state.currentIndex + 1 }));
    }
  }

  render() {
    const { content } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="Carousel">
        <div className="Carousel-slide" ref={this.slide}>
          <img
            src={`https://image.tmdb.org/t/p/original/${content[currentIndex].backdrop_path}`}
            alt={content[currentIndex].name}
            className="Carousel-img"
          />
          <button name="prev" className="Carousel-button prev">
            prev
          </button>
          <button
            name="next"
            onClick={this.nextSlide}
            className="Carousel-button next">
            next
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
