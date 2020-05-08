import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

function LoadingScreen(props) {
  return (
    <Wrapper>
      <div className="dot-1"></div>
      <div className="dot-2"></div>
      <div className="dot-3"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.royalNavyBlue};

  .dot-1,
  .dot-2,
  .dot-3 {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${colors.smurfBlue};
    margin: 1rem;
    border-radius: 50%;
    animation-name: breathe;
    animation-duration: 1000ms;
    animation-timing-function: ease;
    animation-direction: both;
    animation-iteration-count: infinite;
    opacity: 0.5;
  }

  .dot-1 {
    animation-delay: 150ms;
  }
  .dot-2 {
    animation-delay: 300ms;
  }
  .dot-3 {
    animation-delay: 450ms;
  }

  @keyframes breathe {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

export default LoadingScreen;
