import React from "react";

import "./Poster.css";

function Poster(props) {
  const posterPath = `https://image.tmdb.org/t/p/w500/${props.path}`;
  const placeholderPath = ``;

  const style = { backgroundImage: `url(${posterPath})` };
  return <div className="Poster" style={style}></div>;
}

export default Poster;
