import React from "react";

import HeadingGroup from "../HeadingGroup/HeadingGroup";
import Slider from "../Slider/Slider";
import Icon from "../Icon/Icon";
import Message from "../Message/Message";
import "./MovieShowcase.css";

function MovieShowcase({ heading, subheading, data }) {
  return (
    <div className="MovieShowcase">
      <div className="MovieShowcase-inner">
        <HeadingGroup heading={heading} subheading={subheading} />
        {Array.isArray(data) && data.length > 0 ? (
          <Slider items={data} isTypeMovie={true} />
        ) : (
          <div className="MovieShowcase-errorbox">
            <Icon iconClasses="fas fa-frown" secondary />
            <Message message="Oh no, we couldn't find any movies for you, sorry about that!" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieShowcase;
