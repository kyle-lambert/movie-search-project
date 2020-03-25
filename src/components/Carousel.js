import React, { Component } from "react";
import "../css/Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      items: ["red", "blue", "green", "orange"]
    };
  }

  nextItem = () => {
    let index = this.state.index;
    let { items } = this.state;
    let slidesLength = items.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    this.setState({ index: index });
  };

  prevItem = () => {
    let index = this.state.index;
    let { items } = this.state;
    let slidesLength = items.length;

    if (index === 0) {
      index = slidesLength;
    }
    --index;
    this.setState({ index: index });
  };

  render() {
    const { items, index } = this.state;

    return (
      <div className="container">
        <div className="carousel">
          <div
            className="track"
            style={{
              transform: `translateX(-${index * (100 / items.length)}%)`
            }}>
            {this.state.items.map(item => (
              <div className="item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={this.prevItem}>prev</button>
        <button onClick={this.nextItem}>next</button>
      </div>
    );
  }
}

export default Carousel;
