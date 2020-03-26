import React, { Component } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { formatString } from "../utilities";
import "../css/Showcase.css";

class Showcase extends Component {
  render() {
    const { name, isLoading, content } = this.props;
    return (
      <div className="Showcase">
        <div className="Showcase-head">
          Trending: {formatString(this.props.name)}
        </div>
        <div className="Showcase-grid">
          {isLoading ? (
            <div>LOADING</div>
          ) : (
            content.map((item, index) => (
              <Card key={uuidv4()} content={item} index={index} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Showcase;
