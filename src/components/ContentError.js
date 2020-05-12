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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_SECONDARY};
  border-radius: 2px;
`;

const Sadface = styled.div`
  display: inline-block;
  margin: 1.5rem;
  font-size: 5rem;
  color: ${colors.BRAND_SECONDARY};
`;

const Message = styled.p`
  width: 90%;
  font-size: 1.8rem;
  color: ${colors.lightMetalGrey};
  text-align: center;
`;

export default ContentError;
