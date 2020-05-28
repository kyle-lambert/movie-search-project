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
import "./TV.css";

function TV({ data, history }) {
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="TV">
      <Navbar />
      <Backdrop
        backdropPath={data.backdrop_path}
        alt={data.name}
        goBack={goBack}
      />
      <Summary data={data} type="tv" />
      <Showcase
        type="person"
        heading="Cast"
        subheading="A collection of the top-billed actors..."
        data={guardCredits(data, "cast") && data.credits.cast}
      />
      <Showcase
        type="tv"
        heading="Similar"
        subheading="Browse a collection of similar televison shows"
        data={guardSimilar(data) && data.similar.results}
      />
      <Showcase
        type="tv"
        heading="Recommendations"
        subheading="Recommended televison shows based on your current selection..."
        data={guardRecommendations(data) && data.recommendations.results}
      />
    </div>
  );
}

export default TV;
