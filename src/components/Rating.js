import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  font-size: inherit;

  .average {
    margin-right: 0.8rem;
    padding: 0.4rem 0.6rem;
    border: 3px solid ${colors.smurfBlue};
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${colors.smurfBlue};
  }

  .count {
    color: ${colors.lightMetalGrey};
    font-style: italic;
  }
`;

function Rating({ voteAverage, voteCount }) {
  return (
    <Wrapper>
      <div className="average">
        {voteAverage ? `${voteAverage} / 10` : "0 / 10"}
      </div>
      <div className="count">
        {voteCount ? `${voteCount} votes` : "0 votes"}
      </div>
    </Wrapper>
  );
}

export default Rating;
