import React from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import PersonShowcaseItem from "../PersonShowcaseItem/PersonShowcaseItem";
import { v4 as uuidv4 } from "uuid";

import Track from "../../layout/Track/Track";
import "./PersonShowcaseList.css";

function PersonShowcaseList(props) {
  const { title, items_array, loading, error, media_type } = props;
  let content;
  if (error) {
    content = <Error />;
  } else if (loading) {
    content = <Loading />;
  } else {
    content = (
      <Track height="300px" min_height="300px">
        {Array.isArray(items_array) && items_array.length > 0 ? (
          items_array
            .slice(0, 10)
            .map((item) => (
              <PersonShowcaseItem
                key={uuidv4()}
                name={item.name}
                character={item.character}
                path={item.profile_path}
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
    <div className="PersonShowcaseList">
      <h2 className="PersonShowcaseList-title">{title}</h2>
      {content}
    </div>
  );
}

export default PersonShowcaseList;
