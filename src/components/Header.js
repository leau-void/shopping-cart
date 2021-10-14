import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
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

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: inherit;
  padding-right: 10rem;
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
        <Logo to="/">hymn</Logo>

        <StyledLink to="/" exact activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/shop" activeClassName="active">
          Shop
        </StyledLink>
        <CartButton itemQuantity={props.itemQuantity} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
