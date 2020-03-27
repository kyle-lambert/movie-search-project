import React, { Component } from "react";
import TitleBar from "./TitleBar";
import "../css/Information.css";

class Information extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Information">
        <TitleBar content={content} />
      </div>
    );
  }
}

export default Information;
