import React from "react";
import "./HeaderLayout.css";

function HeaderLayout(props) {
  return (
    <header
      className="HeaderLayout"
      style={{ backgroundColor: props.background }}>
      {props.children}
    </header>
  );
}

export default HeaderLayout;
