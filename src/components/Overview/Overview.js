import React from "react";
import "./Overview.css";

function Overview(props) {
  return (
    <div className="Overview">
      <h3 className="Overview-title">{props.title}</h3>
      {props.tagline ? (
        <p className="Overview-tagline">{`"${props.tagline}"`}</p>
      ) : null}
      <p className="Overview-text">
        {props.text ? props.text : "No overview available"}
      </p>
    </div>
  );
}

export default Overview;
