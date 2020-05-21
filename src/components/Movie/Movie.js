import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import Cast from "../Cast/Cast";
import Slider from "../Slider/Slider";
import "./Movie.css";

// 76338
// 76170

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
    similar,
  } = data;

  const summaryProps = {
    title: title,
    genres: genres,
    posterPath: poster_path,
    releaseDate: release_date,
    voteAverage: vote_average,
    voteCount: vote_count,
    overview: overview,
    tagline: tagline,
    credits: credits,
  };

  const backdropProps = {
    backdropPath: backdrop_path,
    title: title,
    goBack: goBack,
  };

  return (
    <div className="Movie">
      <Backdrop data={backdropProps} />
      <Summary data={summaryProps} />
      <Cast cast={credits.cast} count={8} />
      <Slider items={similar.results} />
    </div>
  );
}

export default Movie;
