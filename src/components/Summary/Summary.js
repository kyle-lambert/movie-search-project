import React from "react";

import Poster from "../Poster/Poster";
import HeadingGroup from "../HeadingGroup/HeadingGroup";
import VoteBox from "../VoteBox/VoteBox";
import TextBody from "../TextBody/TextBody";
import "./Summary.css";

function Summary({
  poster,
  title,
  genres,
  release,
  vote_average,
  vote_count,
  overview,
  tagline,
}) {
  const getGenres = () => {
    return Array.isArray(genres) && genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "No genres";
  };

  const getYear = () => {
    return release ? release.slice(0, 4) : "No year";
  };

  return (
    <div className="Summary">
      <div className="Summary-side">
        <Poster path={poster} />
      </div>
      <div className="Summary-main">
        <HeadingGroup heading={title} subheading={getGenres()} />
        <VoteBox vote_average={vote_average} vote_count={vote_count} />
        {tagline && <div className="Summary-tagline">{`"${tagline}"`}</div>}
        <TextBody text={overview} />
      </div>
    </div>
  );
}

export default Summary;
