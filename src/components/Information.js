import React, { Component } from "react";
import "../css/Information.css";

class Information extends Component {
  render() {
    const { title, overview } = this.props.content;
    return (
      <div className="Information">
        <h1 className="Information-head">{title}</h1>
        <p className="Information-overview">{overview}</p>
      </div>
    );
  }
}

export default Information;
