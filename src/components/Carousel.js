import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import CarouselCard from "./CarouselCard";

const renderJSX = (content, type) => {
  switch (type) {
    case "movie":
      return content.map((item) => (
        <CarouselCard
          key={uuidv4()}
          imagePath={item.poster_path}
          title={item.title}
        />
      ));
    case "tv":
      return content.map((item) => (
        <CarouselCard
          key={uuidv4()}
          imagePath={item.poster_path}
          title={item.name}
        />
      ));
    case "person":
      return content.map((item) => (
        <CarouselCard
          key={uuidv4()}
          imagePath={item.profile_path}
          name={item.name}
          character={item.character}
          job={item.job}
        />
      ));
  }
};

function Carousel({ content, type }) {
  if (!content.length > 0) return <div>sorry no content</div>;
  return (
    <Wrapper>
      <Track length={content.length}>
        {content.map((item) => (
          <CarouselCard key={uuidv4()} item={item} type={type} />
        ))}
      </Track>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;
  min-height: 300px;
`;

const Track = styled.div`
  display: flex;
  width: ${(props) => `${props.length * 200}px`};
  padding: 1rem 0;
`;

export default Carousel;
