import React from "react";
import styled from "styled-components";

import sizes from "../styles/sizes";
import colors from "../styles/colors";

function HeadingGroup({ heading, subheading }) {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      {subheading && <Subheading>{subheading}</Subheading>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 0.7rem;
  color: inherit;
`;

const Subheading = styled.p`
  color: ${colors.lightMetalGrey};
  font-size: 1.6rem;
`;

export default HeadingGroup;
