import React from "react";
import "./SliderContent.css";

function SliderContent({ translation, transition, width, children }) {
  const style = {
    transition: `transform ease-out ${transition}s`,
    transform: `translateX(-${translation}px)`,
    width: `${width}%`,
  };
  return (
    <div className="SliderContent" style={style}>
      {children}
    </div>
  );
}

export default SliderContent;
