import React from "react";

import "./Backdrop.css";

function Backdrop(props) {
  const backdropPath = `https://image.tmdb.org/t/p/original/${props.path}`;
  const placeholderPath = ``;

  const style = { backgroundImage: `url(${backdropPath})` };
  return (
    <div className="Backdrop" style={style}>
      {props.children}
    </div>
  );
}

export default Backdrop;
