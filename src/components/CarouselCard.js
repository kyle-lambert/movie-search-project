import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const renderJSX = (item, type) => {
  switch (type) {
    case "movie":
      return (
        <Wrapper path={item.poster_path}>
          <Inner>
            {!item.poster_path && <ErrorText>No Image</ErrorText>}
            <div className="infobox">
              <Heading>{item.title ? item.title : "No title"}</Heading>
            </div>
          </Inner>
        </Wrapper>
      );
    case "tv":
      return (
        <Wrapper path={item.poster_path}>
          <Inner>
            {!item.poster_path && <ErrorText>No Image</ErrorText>}
            <div className="infobox">
              <Heading>{item.name ? item.name : "No title"}</Heading>
            </div>
          </Inner>
        </Wrapper>
      );
    case "person":
      return (
        <Wrapper path={item.profile_path}>
          <Inner>
            {!item.profile_path && <ErrorText>No Image</ErrorText>}
            <div className="infobox">
              <Heading>{item.name ? item.name : "No name"}</Heading>
              {item.character && <Sub>{item.character}</Sub>}
              {item.job && <Sub>{item.job}</Sub>}
            </div>
          </Inner>
        </Wrapper>
      );
    default:
      return <div>default case</div>;
  }
};

function CarouselCard({ item, type }) {
  return <>{renderJSX(item, type)}</>;
}

const Wrapper = styled.div`
  ${(props) =>
    props.path
      ? `background-image: url(https://image.tmdb.org/t/p/w500/${props.path});`
      : `background-color: ${colors.lightMetalGrey};`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  margin: 0 1.5rem;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 2px;
    z-index: 25;
    background-image: linear-gradient(
      transparent 0%,
      rgba(27, 38, 49, 0.8) 80%
    );
  }

  ::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 2px;
    z-index: 20;
    background-color: ${colors.smurfBlueTransparent};
    opacity: 0;
    transition: opacity 200ms ease;
  }

  :hover::before {
    opacity: 1;
    transition: opacity 200ms ease;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Heading = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;
const Sub = styled.p`
  font-size: 1.5rem;
  margin-top: 0.3rem;
  color: ${colors.lightMetalGrey};
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .infobox {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 35;
    padding: 1.6rem;
  }
`;

const ErrorText = styled.p`
  color: ${colors.royalNavyBlue};
`;

export default CarouselCard;
