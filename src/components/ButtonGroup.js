import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";
import sizes from "../styles/sizes";

function ButtonGroup({ activeTab, tabs, changeTab }) {
  const getActiveTab = (activeTab, tab) => {
    return activeTab === tab.toLowerCase();
  };

  const handleClick = (e) => {
    changeTab(e.target.name);
  };

  return (
    <Wrapper>
      {tabs.map((tab, i) => (
        <React.Fragment key={i}>
          <Button
            onClick={handleClick}
            name={tab.toLowerCase()}
            disabled={getActiveTab(activeTab, tab)}
            active={getActiveTab(activeTab, tab)}>
            {tab[0].toUpperCase() + tab.slice(1)}
          </Button>
          {tabs.length - 1 !== i ? <span className="slash">/</span> : null}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${colors.lightMetalGrey};

  .slash {
    display: inline-block;
    margin: 0 1rem;
    text-align: center;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: ${(props) => (props.active ? "auto" : "pointer")};
  font-size: 1.8rem;
  display: inline-block;
  padding: 0.5rem;
  font-weight: ${(props) => (props.active ? "500" : "300")};
  color: ${(props) =>
    `${props.active ? "#00BFFF" : `${colors.lightMetalGrey}`}`};
  background-color: transparent;

  :hover {
    color: ${(props) => (props.active ? "inital" : `${colors.pureWhite}`)};
  }
`;

export default ButtonGroup;
