import React from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Track from "../../layout/Track/Track";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import { v4 as uuidv4 } from "uuid";
import "./Showcase.css";

function Showcase(props) {
  const { title, category } = props;
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
            title={item.title}
            path={item.poster_path}
          />
        ))}
      </Track>
    );
  }
  return (
    <div className="Showcase">
      <h2>{title}</h2>
      {content}
    </div>
  );
}

export default Showcase;
