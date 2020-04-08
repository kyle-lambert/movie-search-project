import React from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Track from "../../layout/Track/Track";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ShowcaseList.css";

function ShowcaseList(props) {
  const { title, category, current_filter, media_type } = props;
  let content;
  if (category.error) {
    content = <Error />;
  } else if (category.loading) {
    content = <Loading />;
  } else {
    content = (
      <Track>
        {category.data.map((item) => (
          <ShowcaseItem
            key={uuidv4()}
            title={current_filter === "movie" ? item.title : item.name}
            path={item.poster_path}
            media_type={media_type}
            id={item.id}
          />
        ))}
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
