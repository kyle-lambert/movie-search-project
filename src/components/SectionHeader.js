import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";
import sizes from "../styles/sizes";

const Wrapper = styled.div`
  position: relative;
  padding: 2.2rem 0;
  text-align: center;

  .heading {
    font-size: 3.6rem;
    margin-bottom: 1rem;
    color: inherit;
  }

  .subheading {
    font-size: 1.8rem;
    color: ${colors.lightMetalGrey};
  }

  ::before {
    content: "";
    width: 20%;
    height: 1px;
    background-color: ${colors.lightGrey};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: ${sizes.tablet}) {
    text-align: left;

    ::before {
      width: 15%;
      left: 0;
      transform: unset;
    }
  }
`;

function SectionHeader({ heading, subheading }) {
  return (
    <Wrapper>
      <h1 className="heading">{heading && heading}</h1>
      <p className="subheading">{subheading && subheading}</p>
    </Wrapper>
  );
}

export default SectionHeader;
