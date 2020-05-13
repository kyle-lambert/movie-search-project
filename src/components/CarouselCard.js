import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../styles/colors";

const linkStyle = {
  display: "block",
  width: "100%",
  height: "100%",
  textDecoration: "none",
};

const renderJSX = (item, type) => {
  switch (type) {
    case "movie":
      return (
        <Wrapper>
          <Link to={`/details/movie/${item.id}`} style={linkStyle}>
            <Inner path={item.poster_path}>
              {!item.poster_path && <ErrorText>No Image</ErrorText>}
              <div className="infobox">
                <Heading>{item.title ? item.title : "No title"}</Heading>
              </div>
            </Inner>
          </Link>
        </Wrapper>
      );
    case "tv":
      return (
        <Wrapper>
          <Link to={`/details/tv/${item.id}`} style={linkStyle}>
            <Inner path={item.poster_path}>
              {!item.poster_path && <ErrorText>No Image</ErrorText>}
              <div className="infobox">
                <Heading>{item.name ? item.name : "No title"}</Heading>
              </div>
            </Inner>
          </Link>
        </Wrapper>
      );
    case "person":
      return (
        <Wrapper>
          <Link to={`/details/person/${item.id}`} style={linkStyle}>
            <Inner path={item.profile_path}>
              {!item.profile_path && <ErrorText>No Image</ErrorText>}
              <div className="infobox">
                <Heading>{item.name ? item.name : "No name"}</Heading>
                {item.character && <Sub>{item.character}</Sub>}
                {item.job && <Sub>{item.job}</Sub>}
              </div>
            </Inner>
          </Link>
        </Wrapper>
      );
    default:
      return <div>default case</div>;
  }
};

class CarouselCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, type } = this.props;
    return <>{renderJSX(item, type)}</>;
  }
}

const Wrapper = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  margin: 0 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 600ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 300ms;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Heading = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.TEXT_PRIMARY_LIGHT};
`;

const Sub = styled.p`
  font-size: 1.5rem;
  margin-top: 0.3rem;
  color: ${colors.TEXT_PRIMARY_DARK};
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.path
      ? `background-image: url(https://image.tmdb.org/t/p/w500/${props.path});`
      : `background-color: ${colors.BACKGROUND_SECONDARY};`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-image: linear-gradient(transparent, ${colors.BRAND_SECONDARY});
    opacity: 0;
    transition: opacity 200ms ease;
    border-radius: 2px;
  }

  :hover .infobox {
    opacity: 1;
  }

  :hover::after {
    opacity: 1;
  }

  .infobox {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 35;
    padding: 1.4rem;
    opacity: 0;
    transition: opacity 200ms ease;
  }
`;

const ErrorText = styled.p`
  color: ${colors.TEXT_SECONDARY};
`;
export default CarouselCard;
