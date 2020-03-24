import React, { Component } from "react";
import "../css/Slider.css";

class Slider extends Component {
  static defaultProps = {
    boxes: [1, 2, 3, 4, 5]
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Slider">
        <div className="Slider-container">
          <div className="Slider-slide">
            <div className="Slider-item" style={{ backgroundColor: "red" }}>
              1
            </div>
            <div className="Slider-item" style={{ backgroundColor: "blue" }}>
              2
            </div>
            <div className="Slider-item" style={{ backgroundColor: "green" }}>
              3
            </div>
            <div className="Slider-item" style={{ backgroundColor: "orange" }}>
              4
            </div>
            <div className="Slider-item" style={{ backgroundColor: "yellow" }}>
              5
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
