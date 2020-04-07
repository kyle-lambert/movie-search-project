import React from "react";

function Details(props) {
  return (
    <div>
      <h1>Details</h1>
      <p>id: {props.id}</p>
      <p>media_type: {props.media_type}</p>
    </div>
  );
}

export default Details;
