import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  transform: ${(props) => `translateX(-${props.translation}px)`};
  transition: ${(props) => `transform ease-out ${props.transition}s`};
  height: 100%;
  width: ${(props) => `${props.width}px`};
  display: flex;
`;

function SliderContent({ translation, transition, width, children }) {
  return (
    <Wrapper transition={transition} translation={translation} width={width}>
      {children}
    </Wrapper>
  );
}

export default SliderContent;
