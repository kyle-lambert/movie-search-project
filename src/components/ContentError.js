import React from "react";
import styled from "styled-components";

import sizes from "../styles/sizes";
import colors from "../styles/colors";

function ContentError({ minHeight, message }) {
  return (
    <Wrapper minHeight={minHeight}>
      <Sadface>
        <i className="fas fa-frown"></i>
      </Sadface>
      <Message>{message}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: ${(props) => `${props.minHeight}px`};
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sadface = styled.div`
  display: inline-block;
  margin: 2rem;
  font-size: 5rem;
  color: ${colors.smurfBlue};
`;

const Message = styled.p`
  width: 90%;
  font-size: 1.8rem;
  color: ${colors.lightMetalGrey};
  text-align: center;
`;

export default ContentError;
