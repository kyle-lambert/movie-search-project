import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 3rem;
  color: ${colors.pureWhite};
  transition: transform 300ms ease;

  :hover {
    transform: scale(1.4);
    transition: transform 200ms ease;
  }
`;

function BackButton({ goBack }) {
  const handleClick = () => {
    goBack();
  };

  return (
    <Button onClick={handleClick}>
      <i className="fas fa-chevron-left"></i>
    </Button>
  );
}

export default BackButton;
