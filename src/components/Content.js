import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Cast from "./Cast";
import "../css/Content.css";

class Content extends Component {
  render() {
    const {
      content,
      content: { title, poster_path, backdrop_path, production_companies, cast }
    } = this.props;
    return (
      <div className="Content">
        <Backdrop title={title} backdrop_path={backdrop_path} />
        <div className="Content-grid">
          <Poster
            title={title}
            poster_path={poster_path}
            production_companies={production_companies}
          />
          <Info content={content} />
          <Cast cast={cast} />
        </div>
      </div>
    );
  }
}

export default Content;
