import React from "react";
import "./FilterToggle.css";

function FilterToggle(props) {
  const handleClick = (e) => {
    props.toggleFilter(e.target.value);
  };

  return (
    <div className="FilterToggle">
      <div className="FilterToggle-group">
        <button
          value="movie"
          className="FilterToggle-btn FilterToggle-movie active"
          onClick={handleClick}>
          Movies
        </button>
        <button
          value="tv"
          className="FilterToggle-btn FilterToggle-tv"
          onClick={handleClick}>
          TV Shows
        </button>
      </div>
    </div>
  );
}

export default FilterToggle;
