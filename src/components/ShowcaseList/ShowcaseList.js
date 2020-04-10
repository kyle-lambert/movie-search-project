import React from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Track from "../../layout/Track/Track";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import { v4 as uuidv4 } from "uuid";
import "./ShowcaseList.css";

function ShowcaseList(props) {
  const { title, category, media_type } = props;
  let content;
  if (category.error) {
    content = <Error />;
  } else if (category.loading) {
    content = <Loading />;
  } else {
    content = (
      <Track height="375px" min_height="375px">
        {Array.isArray(category.data) && category.data.length > 0 ? (
          category.data.map((item) => (
            <ShowcaseItem
              key={uuidv4()}
              title={media_type === "movie" ? item.title : item.name}
              path={item.poster_path}
              media_type={media_type}
              content_id={item.id}
            />
          ))
        ) : (
          <div>Sorry we don't have any information on this.</div>
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

export default ShowcaseList;
