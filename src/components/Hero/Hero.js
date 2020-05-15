import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Summary from "../Summary/Summary";
import "./Hero.css";

function Hero({
  title,
  backdrop,
  poster,
  genres,
  release,
  vote_average,
  vote_count,
  overview,
  tagline,
  history,
}) {
  return (
    <Backdrop path={backdrop}>
      <div className="Hero-inner">
        <p className="text">hello</p>
        <Summary
          poster={poster}
          title={title}
          genres={genres}
          release={release}
          vote_average={vote_average}
          vote_count={vote_count}
          overview={overview}
          tagline={tagline}
        />
      </div>
    </Backdrop>
  );
}

export default Hero;
