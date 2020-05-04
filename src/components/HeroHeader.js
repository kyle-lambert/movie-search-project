import React from "react";
import styled from "styled-components";

import backgroundGradient from "../images/background-gradient.jpg";

const Wrapper = styled.header`
  position: relative;
  display: block;
  height: 100vh;
  /* background-image: url(${(props) =>
    props.imagePath
      ? "https://image.tmdb.org/t/p/original" + props.imagePath
      : backgroundGradient})
  background-size: cover; */
`;

const Backdrop = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackdropError = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundGradient});
  background-size: cover;
`;

const BodyContainer = styled.div`
  background-color: rgba(27, 38, 49, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function HeroHeader({ backdropPath }) {
  return (
    <Wrapper imagePath={backdropPath}>
      {backdropPath ? (
        <Backdrop src={`https://image.tmdb.org/t/p/original/${backdropPath}`} />
      ) : (
        <BackdropError />
      )}
      <BodyContainer />
    </Wrapper>
  );
}

export default HeroHeader;
