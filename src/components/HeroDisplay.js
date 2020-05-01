import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 500px;
  background-color: green;
`;
const Error = styled.div`
  height: 500px;
  background-color: red;
`;

function HeroDisplay({ items }) {
  return items ? <Wrapper /> : <Error />;
}

export default HeroDisplay;
