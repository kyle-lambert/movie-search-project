import React from "react";
import { Link } from "react-router-dom";

import { truncateStr } from "../../helpers";
import imagePlaceholder from "../../images/person-placeholder.svg";
import "./PersonCard.css";

function PersonCard({ person }) {
  const path = person.profile_path
    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
    : imagePlaceholder;
  return (
    <div className="PersonCard">
      <Link to={`/details/person/${person.id}`}>
        <div className="PersonCard-inner">
          <img src={path} alt={person.name} className="PersonCard-img" />
        </div>
      </Link>
      <div className="PersonCard-info">
        <p className="PersonCard-name">
          {person.name ? truncateStr(person.name, 25) : "No name"}
        </p>
        {person.character && (
          <p className="PersonCard-character">
            {truncateStr(person.character, 25)}
          </p>
        )}
      </div>
    </div>
  );
}

export default PersonCard;
