import React from "react";
import Heading from "../Heading/Heading";
import Overview from "../Overview/Overview";
import "./PersonInfo.css";

function PersonInfo(props) {
  const { name, bio } = props;

  return (
    <div className="PersonInfo">
      <Heading title={name ? name : "No name"} />
      <Overview title="Bio" text={bio} />
    </div>
  );
}

export default PersonInfo;
