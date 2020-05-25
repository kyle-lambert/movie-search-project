import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import Cast from "../Cast/Cast";
import Showcase from "../Showcase/Showcase";
import Spacer from "../Spacer/Spacer";
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

  return (
    <div className="Movie">
      <Backdrop
        backdropPath={data.backdrop_path}
        alt={data.name}
        goBack={goBack}
      />
      <Summary data={data} type="movie" />
      <Cast cast={guardCredits(data, "cast") && data.credits.cast} count={5} />
      <Showcase
        type="movie"
        heading="Similar"
        subheading="Browse a collection of similar movies..."
        data={guardSimilar(data) && data.similar.results}
      />
      <Showcase
        type="movie"
        heading="Recommendated"
        subheading="Recommended movies based on your current selection"
        data={guardRecommendations(data) && data.recommendations.results}
      />
    </div>
  );
}

export default Movie;
