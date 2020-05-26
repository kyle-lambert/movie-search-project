import React from "react";

import HeadingGroup from "../HeadingGroup/HeadingGroup";
import Slider from "../Slider/Slider";
import Icon from "../Icon/Icon";
import Message from "../Message/Message";
import "./Showcase.css";

function Showcase({ heading, subheading, data, type }) {
  const getMovieShowcaseJSX = () => {
    return (
      <div className="Showcase-inner">
        <HeadingGroup heading={heading} subheading={subheading} />
        {Array.isArray(data) && data.length > 0 ? (
          <Slider items={data} type="movie" />
        ) : (
          <div className="Showcase-errorbox">
            <Icon iconClasses="fas fa-frown" secondary />
            <Message message="Oh no, we couldn't find any movies for you, sorry about that!" />
          </div>
        )}
      </div>
    );
  };

  const getTVShowcaseJSX = () => {
    return (
      <div className="Showcase-inner">
        <HeadingGroup heading={heading} subheading={subheading} />
        {Array.isArray(data) && data.length > 0 ? (
          <Slider items={data} type="tv" />
        ) : (
          <div className="Showcase-errorbox">
            <Icon iconClasses="fas fa-frown" secondary />
            <Message message="Oh no, we couldn't find any movies for you, sorry about that!" />
          </div>
        )}
      </div>
    );
  };

  const getPersonShowcaseJSX = () => {
    return (
      <div className="Showcase-inner">
        <HeadingGroup heading={heading} subheading={subheading} />
        {Array.isArray(data) && data.length > 0 ? (
          <Slider items={data.slice(0, 10)} type="person" />
        ) : (
          <div className="Showcase-errorbox">
            <Icon iconClasses="fas fa-frown" secondary />
            <Message message="Oh bummer, we were unable to find the cast members, sorry!" />
          </div>
        )}
      </div>
    );
  };

  const renderShowcase = () => {
    switch (type) {
      case "movie":
        return getMovieShowcaseJSX();
      case "tv":
        return getTVShowcaseJSX();
      case "person":
        return getPersonShowcaseJSX();
      default:
        console.log("renderShowcase type not found!");
    }
  };

  return <div className="Showcase">{renderShowcase()}</div>;
}

export default Showcase;
