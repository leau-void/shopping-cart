import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Music } from "@styled-icons/crypto";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  background: #393e46;
  color: #eeeeee;
  padding: 1rem;
`;

const Nav = styled("nav")`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Name = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  font-size: 3rem;
  color: inherit;
  margin-right: 10rem;
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  padding: 5px;
  text-decoration: none;
  &:hover {
    color: #00adb5;
  }
  &.active  {
    border-bottom: 2px solid #eeeeee;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <Nav>
        <Name to="/">
          hymn
          <Music style={{ width: "2.5rem" }} />
        </Name>

        <StyledLink to="/home" exact activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/shop" activeClassName="active">
          Shop
        </StyledLink>
        <CartButton {...props} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
