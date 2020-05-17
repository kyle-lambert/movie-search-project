import React from "react";
import { v4 as uuidv4 } from "uuid";

import PersonCard from "../PersonCard/PersonCard";
import HeadingGroup from "../HeadingGroup/HeadingGroup";
import Message from "../Message/Message";
import Icon from "../Icon/Icon";
import "./Cast.css";

function Cast({ cast, count = 4 }) {
  return (
    <section className="Cast">
      <HeadingGroup
        heading="Cast"
        subheading="Browse a collection of the top-billed actors"
      />
      {Array.isArray(cast) && cast.length > 0 ? (
        <div className="Cast-grid">
          {cast.slice(0, count).map((person) => (
            <PersonCard key={uuidv4()} person={person} />
          ))}
        </div>
      ) : (
        <div className="Cast-errorbox">
          <Icon iconClasses="fas fa-frown" secondary />
          <Message message="Oh no, we couldn't find any cast members for you, sorry about that!" />
        </div>
      )}
    </section>
  );
}

export default Cast;
