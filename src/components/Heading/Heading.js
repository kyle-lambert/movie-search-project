import React from "react";
import "./Heading.css";

function Heading(props) {
  const shortenDateToYear = (str) => {
    return str.slice(0, 4);
  };
  return (
    <h1 className="Heading">
      {props.title ? props.title : "No title"}
      {props.release_date ? (
        <span className="Heading-span">{`(${shortenDateToYear(
          props.release_date
        )})`}</span>
      ) : null}
    </h1>
  );
}

export default Heading;
