import React from "react";
import Heading from "../Heading/Heading";
import Overview from "../Overview/Overview";
import "./PersonInfo.css";

function PersonInfo(props) {
  const { name, bio, birthday, deathday } = props;
  const formatBirthdayString = () => {
    if (birthday && deathday) return `${birthday} - ${deathday}`;
    return birthday;
  };
  return (
    <div className="PersonInfo">
      <Heading title={name ? name : "No name"} />
      <p className="PersonInfo-dob">
        {formatBirthdayString() ? formatBirthdayString() : "No birthday"}
      </p>
      <Overview title="Bio" text={bio} />
    </div>
  );
}

export default PersonInfo;
