import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import Showcase from "../Showcase/Showcase";
import Navbar from "../Navbar/Navbar";
import "./Person.css";

import {
  guardPersonTvCredits,
  guardPersonMovieCredits,
} from "../../utils/guards.js";

function Person({ data, history }) {
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="Person">
      <Navbar />
      <Backdrop
        backdropPath={
          guardPersonMovieCredits(data) &&
          data.movie_credits.cast[0].backdrop_path
        }
        alt={guardPersonMovieCredits(data) && data.movie_credits.cast[0].title}
        goBack={goBack}
      />
      <Summary data={data} type="person" />
      <Showcase
        type="movie"
        heading="Movies"
        subheading={`Browse a collection of movies starring ${data.name}...`}
        data={guardPersonMovieCredits(data) && data.movie_credits.cast}
      />
      <Showcase
        type="tv"
        heading="Televisions Shows"
        subheading={`Browse a collection of televison shows starring ${data.name}...`}
        data={guardPersonTvCredits(data) && data.tv_credits.cast}
      />
    </div>
  );
}

export default Person;
