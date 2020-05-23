import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import Cast from "../Cast/Cast";
import MovieShowcase from "../MovieShowcase/MovieShowcase";
import {
  guardCredits,
  guardRecommendations,
  guardSimilar,
} from "../../utils/guards";
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
    similar,
    recommendations,
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
      <Cast cast={guardCredits(data, "cast") && credits.cast} count={8} />
      <MovieShowcase
        heading="Similar"
        subheading="Browse a collection of similar movies..."
        data={guardSimilar(data) && similar.results}
      />
      <MovieShowcase
        heading="Recommendated"
        subheading="Recommended movies based on your current selection"
        data={guardRecommendations(data) && recommendations.results}
      />
    </div>
  );
}

export default Movie;
