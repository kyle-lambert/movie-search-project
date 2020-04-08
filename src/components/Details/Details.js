import React from "react";
import Backdrop from "../Backdrop/Backdrop";

function Details(props) {
  const { data, media_type, content_id } = props;
  const { details, credits, reviews, recommendations, similar } = data;
  return (
    <>
      <Backdrop
        title={media_type === "movie" ? details.data.title : details.data.name}
        path={details.data.backdrop_path}
        loading={details.loading}
        error={details.error}
      />
    </>
  );
}

export default Details;
