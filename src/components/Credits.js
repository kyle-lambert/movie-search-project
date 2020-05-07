import React from "react";
import styled from "styled-components";

import ButtonGroup from "./ButtonGroup";
import HeadingGroup from "./HeadingGroup";
import Carousel from "./Carousel";

import sizes from "../styles/sizes";
import colors from "../styles/colors";

function Credits({ cast, crew, activeTab, changeTab }) {
  const getSubheading = (activeTab) => {
    switch (activeTab) {
      case "cast":
        return "Explore the top billed Actors...";
      case "crew":
        return "Discover the production team...";
      default:
        return "No subheading";
    }
  };

  return (
    <Wrapper>
      <div className="head">
        <HeadingGroup
          heading={activeTab[0].toUpperCase() + activeTab.slice(1)}
          subheading={getSubheading(activeTab)}
        />
        <ButtonGroup
          changeTab={changeTab}
          activeTab={activeTab}
          tabs={["cast", "crew"]}
        />
      </div>
      <div className="body">
        <Carousel content={activeTab === "cast" ? cast : crew} type="person" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem;
  width: 100%;
  background-color: #283747;

  .head {
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: ${sizes.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .body {
    margin-top: 1rem;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    padding: 4rem 6rem;
  }

  @media screen and (min-width: ${sizes.laptop}) {
    padding: 4rem 9rem;
  }
`;

export default Credits;
