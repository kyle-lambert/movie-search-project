import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const renderJSX = (item, type) => {
  switch (type) {
    case "movie":
      return <Wrapper path={item.poster_path}></Wrapper>;
    case "tv":
      return <Wrapper path={item.poster_path}></Wrapper>;
    case "person":
      return <Wrapper path={item.profile_path}></Wrapper>;
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
      : `background-color: ${colors.lightGrey};`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 300px;
  margin: 0 1rem;
  border-radius: 2px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Inner = styled.div``;

export default CarouselCard;
