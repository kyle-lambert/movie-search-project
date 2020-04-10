import React from "react";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { v4 as uuidv4 } from "uuid";
import "./DetailsShowcaseList.css";

import Track from "../../layout/Track/Track";

function DetailsShowcaseList(props) {
  const { title, items_array, loading, error, media_type } = props;
  let content;
  if (error) {
    content = <Error />;
  } else if (loading) {
    content = <Loading />;
  } else {
    content = (
      <Track height="375px" min_height="375px">
        {Array.isArray(items_array) && items_array.length > 0 ? (
          items_array.map((item) => (
            <ShowcaseItem
              key={uuidv4()}
              title={media_type === "movie" ? item.title : item.name}
              path={item.poster_path}
              media_type={media_type}
              content_id={item.id}
            />
          ))
        ) : (
          <div>Sorry we can't find any information on this.</div>
        )}
      </Track>
    );
  }
  return (
    <div className="ShowcaseList">
      <h2 className="ShowcaseList-title">{title}</h2>
      {content}
    </div>
  );
}

export default DetailsShowcaseList;
