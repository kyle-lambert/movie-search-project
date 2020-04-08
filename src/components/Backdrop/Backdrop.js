import React from "react";
import ContentError from "../ContentError/ContentError";
import "./Backdrop.css";

function Backdrop(props) {
  const { title, path, loading, error } = props;
  let content;
  if (error) {
    content = <div>error</div>;
  } else if (loading) {
    content = <div>loading...</div>;
  } else {
    content = (
      <div className="Backdrop-inner">
        {path ? (
          <img
            className="Backdrop-img"
            src={`https://image.tmdb.org/t/p/original/${path}`}
            alt={title}
          />
        ) : (
          <ContentError text="No backdrop image" height="500px" />
        )}
      </div>
    );
  }

  return <div className="Backdrop">{content}</div>;
}

export default Backdrop;
