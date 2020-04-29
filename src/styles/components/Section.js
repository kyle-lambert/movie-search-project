import styled from "styled-components";

import colors from "../colors";
import sizes from "../sizes";

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 3rem;
  background-color: ${(props) =>
    props.light ? colors.pureWhite : colors.royalNavyBlue};
  color: ${(props) => (props.light ? colors.royalNavyBlue : colors.pureWhite)};

  @media screen and (min-width: ${sizes.tablet}) {
    padding: 4rem 6rem;
  }
`;

export default Section;
