import React from "react";

import BackButton from "../BackButton/BackButton";
import Poster from "../Poster/Poster";
import HeadingGroup from "../HeadingGroup/HeadingGroup";
import VoteBox from "../VoteBox/VoteBox";
import "./Summary.css";

function Summary(props) {
  const {
    poster,
    title,
    genres,
    release,
    vote_average,
    vote_count,
    overview,
    tagline,
    backdrop,
    goBack,
  } = props;

  const getGenres = () => {
    return Array.isArray(genres) && genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "No genres";
  };

  const getYear = () => {
    return release ? release.slice(0, 4) : "No year";
  };

  const backgroundStyle = backdrop && {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop})`,
  };

  return (
    <div className="Summary" style={backgroundStyle}>
      <BackButton goBack={goBack} />
      <div className="Summary-grid">
        <div className="Summary-side">
          <Poster path={poster} title={title} />
        </div>
        <div className="Summary-main">
          <HeadingGroup heading={title} subheading={getGenres()} />
          <VoteBox vote_average={vote_average} vote_count={vote_count} />
          {tagline && <div className="Summary-tagline">{`"${tagline}"`}</div>}
          <p className="Summary-body">{overview ? overview : "No overview"}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
