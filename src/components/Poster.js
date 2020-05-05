import React from "react";
import styled from "styled-components";

import sizes from "../styles/sizes";

const Wrapper = styled.div`
  display: none;
  width: 250px;
  height: 375px;
  margin-right: 3rem;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  flex-shrink: 0;

  @media screen and (min-width: ${sizes.tablet}) {
    display: block;
  }
`;

const getPosterStyle = (posterPath) => {
  if (posterPath)
    return {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
    };
  return {
    backgroundColor: "teal",
  };
};

function Poster({ posterPath }) {
  return <Wrapper style={getPosterStyle(posterPath)} />;
}

export default Poster;
