import React from "react";

import Hero from "../Hero/Hero";
import "./Movie.css";

function Movie({ data, history }) {
  const {
    title,
    backdrop_path,
    poster_path,
    genres,
    release_date,
    vote_average,
    vote_count,
    overview,
    tagline,
  } = data;
  return (
    <div className="Movie">
      <Hero
        backdrop={backdrop_path}
        title={title}
        poster={poster_path}
        genres={genres}
        release={release_date}
        vote_average={vote_average}
        vote_count={vote_count}
        overview={overview}
        tagline={tagline}
        history={history}
      />
    </div>
  );
}

export default Movie;
