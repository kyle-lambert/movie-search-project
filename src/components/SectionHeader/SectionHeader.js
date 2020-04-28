import React from "react";
import "./SectionHeader.css";

function SectionHeader({ title, sub }) {
  return (
    <div className="SectionHeader">
      <h1 className="SectionHeader-title">{title && title}</h1>
      <p className="SectionHeader-sub">{sub && sub}</p>
    </div>
  );
}

export default SectionHeader;
