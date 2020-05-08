import React from "react";
import styled from "styled-components";

import sizes from "../styles/sizes";
import colors from "../styles/colors";

const Wrapper = styled.div`
  display: none;
  width: 250px;
  height: 375px;
  margin-right: 3rem;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  flex-shrink: 0;
  ${(props) =>
    props.posterPath
      ? `background-image: url(https://image.tmdb.org/t/p/original/${props.posterPath});`
      : `background-color: ${colors.lightMetalGrey};`}

  @media screen and (min-width: ${sizes.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Poster({ posterPath }) {
  return (
    <Wrapper posterPath={posterPath}>
      {!posterPath && <p className="error">No Image</p>}
    </Wrapper>
  );
}

export default Poster;
