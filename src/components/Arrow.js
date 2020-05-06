import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  outline: none;
  border: none;
  background-color: lightcoral;
  color: white;
  font-size: inherit;
  border-radius: 2px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => `${props.direction === "left" ? `left: 10px` : `right: 10px`}`};
  padding: 1rem;
`;

function Arrow({ direction, handleClick }) {
  return (
    <Wrapper direction={direction} onClick={handleClick}>
      {direction === "left" ? "left" : "right"}
    </Wrapper>
  );
}

export default Arrow;
