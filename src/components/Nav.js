import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  padding: 0.4rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  z-index: 2;
  background: black;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
const Logo = styled.div`
  padding: 0.5rem 0;
  color: #fee000;
  text-decoration: none;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: 'Source Serif Pro', serif;`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>unscripted</Logo>
      <Burger />
    </Nav>
  );
};

export default Navbar;
