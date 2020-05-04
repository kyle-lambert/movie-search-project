import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
`;

function LoadingScreen(props) {
  return (
    <Wrapper>
      <p>Currently loading...</p>
    </Wrapper>
  );
}

export default LoadingScreen;
