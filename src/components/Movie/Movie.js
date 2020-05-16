import React from "react";

import Summary from "../Summary/Summary";
import Cast from "../Cast/Cast";
import "./Movie.css";

function Movie({ data, history }) {
  const goBack = () => {
    history.goBack();
  };

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
    credits,
  } = data;
  return (
    <div className="Movie">
      <Summary
        backdrop={backdrop_path}
        title={title}
        poster={poster_path}
        genres={genres}
        release={release_date}
        vote_average={vote_average}
        vote_count={vote_count}
        overview={overview}
        tagline={tagline}
        goBack={goBack}
      />
      <Cast cast={credits.cast} count={8} />
    </div>
  );
}

export default Movie;
