import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-left: 32px;
  padding-top: 32px;
  background-color: #ecf2f9;
`;

const Logo = styled.span`
  font-size: 32px;
  color: #5d5b6a;
  font-weight: bold;
  font-family: "Amatic SC", cursive;
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Logo>Grits and Biscuits</Logo>
      </NavLink>
    </Nav>
  );
};

export default Header;
