import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Information from "./Information";
import "../css/Content.css";

class Content extends Component {
  render() {
    const {
      content,
      content: { title, poster_path, backdrop_path }
    } = this.props;
    return (
      <div className="Content">
        <Backdrop title={title} backdrop_path={backdrop_path} />
        <div className="Content-grid">
          <Poster title={title} poster_path={poster_path} />
          <Information content={content} />
        </div>
      </div>
    );
  }
}

export default Content;
