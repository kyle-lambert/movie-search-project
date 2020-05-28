import React from "react";

import Poster from "../Poster/Poster";
import VoteBox from "../VoteBox/VoteBox";
import "./Summary.css";

function Summary({ data, type }) {
  const getGenres = () => {
    const { genres } = data;
    return Array.isArray(genres) && genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "No genres";
  };

  const getYear = () => {
    const { release_date } = data;
    return release_date ? release_date.slice(0, 4) : "No year";
  };

  const getFirstAirYear = () => {
    const { first_air_date } = data;
    return first_air_date ? first_air_date.slice(0, 4) : "No year";
  };

  const getRuntime = () => {
    const { runtime } = data;
    return runtime ? `${runtime} mins` : "No runtime";
  };

  const getSeasons = () => {
    const { number_of_seasons } = data;
    return number_of_seasons ? `${number_of_seasons} seasons` : "No seasons";
  };

  const getEpisodes = () => {
    const { number_of_episodes } = data;
    return number_of_episodes
      ? `${number_of_episodes} episodes`
      : "No episodes";
  };

  const getDOB = () => {
    const { birthday, deathday } = data;
    if (!deathday) return birthday;
    return `${birthday} - ${deathday}`;
  };

  const getGender = () => {
    const { gender } = data;
    if (!gender) return "No gender";
    return gender === 1 ? "Female" : "Male";
  };

  const getMovieJSX = () => {
    return (
      <div className="Summary-wrapper">
        <Poster posterPath={data.poster_path} title={data.title} />
        <div className="Summary-main">
          <h1 className="Summary-heading">
            {data.title ? data.title : "No title"}
          </h1>
          <p className="Summary-sub">{getGenres()}</p>
          <div className="Summary-stats">
            <p className="Summary-stat">{getYear()}</p>
            <span className="Summary-span"></span>
            <p className="Summary-stat">{getRuntime()}</p>
          </div>
          <VoteBox
            voteAverage={data.vote_average}
            voteCount={data.vote_count}
          />
          {data.tagline && (
            <div className="Summary-tagline">{`"${data.tagline}"`}</div>
          )}
          <p className="Summary-body">
            {data.overview ? data.overview : "No overview"}
          </p>
        </div>
      </div>
    );
  };

  const getTVJSX = () => {
    return (
      <div className="Summary-wrapper">
        <Poster posterPath={data.poster_path} title={data.name} />
        <div className="Summary-main">
          <h1 className="Summary-heading">
            {data.name ? data.name : "No title"}
          </h1>
          <p className="Summary-sub">{getGenres()}</p>
          <div className="Summary-stats">
            <p className="Summary-stat">{getFirstAirYear()}</p>
            <span className="Summary-span"></span>
            <p className="Summary-stat">{getSeasons()}</p>
            <span className="Summary-span"></span>
            <p className="Summary-stat">{getEpisodes()}</p>
          </div>
          <VoteBox
            voteAverage={data.vote_average}
            voteCount={data.vote_count}
          />
          <p className="Summary-body">
            {data.overview ? data.overview : "No overview"}
          </p>
        </div>
      </div>
    );
  };

  const getPersonJSX = () => {
    return (
      <div className="Summary-wrapper">
        <Poster posterPath={data.profile_path} title={data.name} />
        <div className="Summary-main">
          <h1 className="Summary-heading">
            {data.name ? data.name : "No title"}
          </h1>
          <p className="Summary-sub">
            {data.place_of_birth ? data.place_of_birth : "No birthplace"}
          </p>
          <div className="Summary-stats">
            <p className="Summary-stat">{getDOB()}</p>
            <span className="Summary-span"></span>
            <p className="Summary-stat">{getGender()}</p>
          </div>
          <p className="Summary-body">
            {data.biography ? data.biography : "No biography"}
          </p>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    switch (type) {
      case "movie":
        return getMovieJSX();
      case "tv":
        return getTVJSX();
      case "person":
        return getPersonJSX();
      default:
        console.log("renderSummary type not found!");
    }
  };

  return <div className="Summary">{renderSummary()}</div>;
}

export default Summary;
