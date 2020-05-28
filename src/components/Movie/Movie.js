import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import Showcase from "../Showcase/Showcase";
import Navbar from "../Navbar/Navbar";
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
      <Navbar />
      <Backdrop
        backdropPath={data.backdrop_path}
        alt={data.name}
        goBack={goBack}
      />
      <Summary data={data} type="movie" />
      <Showcase
        type="person"
        heading="Cast"
        subheading="A collection of the top-billed actors..."
        data={guardCredits(data, "cast") && data.credits.cast}
      />
      <Showcase
        type="movie"
        heading="Similar"
        subheading="Browse a collection of similar movies..."
        data={guardSimilar(data) && data.similar.results}
      />
      <Showcase
        type="movie"
        heading="Recommendations"
        subheading="Recommended movies based on your current selection..."
        data={guardRecommendations(data) && data.recommendations.results}
      />
    </div>
  );
}

export default Movie;
