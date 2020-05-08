import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import colors from "../styles/colors";

import CarouselCard from "./CarouselCard";

function Carousel({ content, type, accentColor }) {
  return (
    <Wrapper accentColor={accentColor}>
      <Track>
        {content.map((item) => (
          <CarouselCard key={uuidv4()} item={item} type={type} />
        ))}
      </Track>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  min-height: 300px;

  ::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    width: 15px;
    background-image: ${(props) =>
      `linear-gradient(90deg, ${props.accentColor}, transparent)`};
    z-index: 50;
  }

  ::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    width: 15px;
    background-image: ${(props) =>
      `linear-gradient(90deg, transparent, ${props.accentColor})`};
    z-index: 50;
  }
`;

const Track = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export default Carousel;
