import React from "react";
import styled from "styled-components";

import colors from "../colors";

function SectionSpacer(props) {
  return <Spacer />;
}

const Spacer = styled.hr`
  outline: none;
  border: none;
  background: linear-gradient(
    90deg,
    ${colors.royalNavyBlue} 10%,
    ${colors.smurfBlue} 50%,
    ${colors.royalNavyBlue} 90%
  );
  height: 2px;
`;

export default SectionSpacer;
