import React from "react";
import ContentError from "../ContentError/ContentError";
import { Link } from "react-router-dom";
import "./PersonCard.css";

function PersonCard(props) {
  const { person } = props;
  return (
    <div className="PersonCard">
      <Link
        to={`/details/person/${person.id}`}
        style={{ color: "inherit", textDecoration: "none" }}>
        <div className="PersonCard-inner">
          {person.profile_path ? (
            <img
              className="PersonCard-img"
              src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
              alt={person.name}
            />
          ) : (
            <ContentError text="No image" />
          )}
          <div className="PersonCard-info">
            <p className="PersonCard-title">
              {person.name ? person.name : "No name"}
            </p>
            <p className="PersonCard-character">
              {person.character ? person.character : "No character"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PersonCard;
