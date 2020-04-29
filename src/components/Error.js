import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  .message {
    color: inherit;
    text-align: center;
  }
`;

function Error({ message }) {
  return (
    <Wrapper>
      <p className="message">{message && message}</p>
    </Wrapper>
  );
}

export default Error;
