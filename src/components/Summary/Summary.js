import React from "react";

import Poster from "../Poster/Poster";
import HeadingGroup from "../HeadingGroup/HeadingGroup";
import VoteBox from "../VoteBox/VoteBox";
import "./Summary.css";

function Summary({ data }) {
  const {
    title,
    genres,
    posterPath,
    releaseDate,
    voteAverage,
    voteCount,
    overview,
    tagline,
    credits,
  } = data;

  const getGenres = () => {
    return Array.isArray(genres) && genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "No genres";
  };

  const getYear = () => {
    return releaseDate ? releaseDate.slice(0, 4) : "No year";
  };

  return (
    <div className="Summary">
      <div className="Summary-grid">
        <div className="Summary-side">
          <Poster posterPath={posterPath} title={title} />
        </div>
        <div className="Summary-main">
          <HeadingGroup heading={title} subheading={getGenres()} />
          <VoteBox voteAverage={voteAverage} voteCount={voteCount} />
          {tagline && <div className="Summary-tagline">{`"${tagline}"`}</div>}
          <p className="Summary-body">{overview ? overview : "No overview"}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
