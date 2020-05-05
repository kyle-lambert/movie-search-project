import styled from "styled-components";

import sizes from "../sizes";

const ResponsiveContainer = styled.div`
  padding: 3rem;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${sizes.tablet}) {
    padding: 4rem 6rem;
  }

  @media screen and (min-width: ${sizes.laptop}) {
    padding: 4rem 9rem;
  }
`;

export default ResponsiveContainer;
