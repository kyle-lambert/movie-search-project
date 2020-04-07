import React from "react";
import ShowcaseSection from "../ShowcaseSection/ShowcaseSection";

function Home(props) {
  const { movie, tv, current_filter } = props;
  const handleClick = (e) => {
    props.toggleFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <button value="tv" onClick={handleClick}>
          change to tv shows
        </button>
        <button value="movie" onClick={handleClick}>
          change to movies
        </button>
      </div>
      <ShowcaseSection movie={movie} tv={tv} current_filter={current_filter} />
    </div>
  );
}

export default Home;
