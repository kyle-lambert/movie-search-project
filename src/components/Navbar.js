import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

const Wrapper = styled.div`
  padding: 0 2rem;
  height: 7rem;
  background-color: ${colors.pureWhite};
  display: flex;
  align-content: center;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;

  .menu {
    display: flex;
    list-style: none;
    margin-left: 3rem;
  }

  .link {
    padding: 0.5rem;
    margin-right: 1rem;
    color: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;

    :hover {
      color: ${colors.smurfBlue};
    }
  }
`;

const LogoLink = styled.a`
  font-size: 3rem;
  color: ${colors.smurfBlue};
  font-family: "Monoton", sans-serif;
  padding: 0.5rem;
  cursor: pointer;
`;

const Search = styled.div`
  background-color: blue;
`;

function Navbar(props) {
  return (
    <Wrapper>
      <Nav>
        <LogoLink href="#">MovieCloud</LogoLink>
        <ul className="menu">
          <a className="link" href="#">
            Home
          </a>
          <a className="link" href="#">
            Movies
          </a>
          <a className="link" href="#">
            TV Shows
          </a>
        </ul>
      </Nav>
      <Search>asdfasdfas</Search>
    </Wrapper>
  );
}

export default Navbar;
