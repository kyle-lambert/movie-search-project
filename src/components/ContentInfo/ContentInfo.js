import React from "react";
import Heading from "../Heading/Heading";
import Genres from "../Genres/Genres";
import Rating from "../Rating/Rating";
import Overview from "../Overview/Overview";
import "./ContentInfo.css";

function ContentInfo(props) {
  const { data, media_type } = props;

  return (
    <div className="ContentInfo">
      <Heading
        title={media_type === "movie" ? data.title : data.name}
        release_date={
          media_type === "movie" ? data.release_date : data.first_air_date
        }
      />
      <Genres genres={data.genres} />
      <Rating vote_count={data.vote_count} vote_average={data.vote_average} />
      <Overview
        title="Overview"
        text={data.overview}
        tagline={media_type === "movie" ? data.tagline : null}
      />
    </div>
  );
}

export default ContentInfo;
