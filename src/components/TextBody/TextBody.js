import React from "react";

import "./TextBody.css";

function TextBody({ text }) {
  return <p className="TextBody">{text ? text : "No text"}</p>;
}

export default TextBody;
