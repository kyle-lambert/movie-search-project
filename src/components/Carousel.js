import React, { PureComponent } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import colors from "../styles/colors";

import CarouselCard from "./CarouselCard";
import ContentError from "./ContentError";

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, type, accentColor } = this.props;

    return (
      <Wrapper accentColor={accentColor}>
        {content && content.length > 0 ? (
          <Track>
            {content.map((item) => (
              <CarouselCard key={uuidv4()} item={item} type={type} />
            ))}
          </Track>
        ) : (
          <ContentError
            minHeight={300}
            message={`Oh bummer, there is no available information...`}
          />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
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
