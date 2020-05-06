import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Slide({ content }) {
  return (
    <Wrapper style={{ backgroundImage: `url(${content.image})` }}></Wrapper>
  );
}

export default Slide;
