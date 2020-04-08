import React from "react";
import ShowcaseList from "../ShowcaseList/ShowcaseList";
import Spacer from "../../layout/Spacer/Spacer";

function ShowcaseSection(props) {
  const { movie, tv, current_filter } = props;
  let content;
  switch (current_filter) {
    case "movie":
      content = (
        <>
          <ShowcaseList
            title="Popular"
            media_type={movie.media_type}
            category={movie.popular}
            current_filter={current_filter}
          />
          <Spacer />
          <ShowcaseList
            title="Now Playing"
            media_type={movie.media_type}
            category={movie.now_playing}
            current_filter={current_filter}
          />
          <Spacer />
          <ShowcaseList
            title="Top Rated"
            media_type={movie.media_type}
            category={movie.top_rated}
            current_filter={current_filter}
          />
        </>
      );
      break;

    case "tv":
      content = (
        <>
          <ShowcaseList
            title="Popular"
            media_type={tv.media_type}
            category={tv.popular}
            current_filter={current_filter}
          />
          <Spacer />
          <ShowcaseList
            title="Top Rated"
            media_type={tv.media_type}
            category={tv.top_rated}
            current_filter={current_filter}
          />
          <Spacer />
          <ShowcaseList
            title="On The Air"
            media_type={tv.media_type}
            category={tv.on_the_air}
            current_filter={current_filter}
          />
        </>
      );
      break;
    default:
      break;
  }
  return <section className="ShowcaseSection">{content}</section>;
}

export default ShowcaseSection;
