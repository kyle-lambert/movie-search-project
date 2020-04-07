import React from "react";
import Showcase from "../Showcase/Showcase";

function ShowcaseSection(props) {
  const { movie, tv, current_filter } = props;
  let content;
  switch (current_filter) {
    case "movie":
      content = (
        <>
          <Showcase title="Popular" category={movie.popular} />
          <Showcase title="Now Playing" category={movie.now_playing} />
          <Showcase title="Top Rated" category={movie.top_rated} />
        </>
      );
      break;

    case "tv":
      content = (
        <>
          <Showcase title="Popular" category={tv.popular} />
          <Showcase title="Top Rated" category={tv.top_rated} />
        </>
      );
      break;
    default:
      break;
  }
  return <section className="ShowcaseSection">{content}</section>;
}

export default ShowcaseSection;
