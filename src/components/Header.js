import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Music } from "@styled-icons/crypto";
import CartButton from "./CartButton";

const StyledHeader = styled.header`
  background: #393e46;
  color: #eeeeee;
  height: 15vh;
  position: fixed;
  width: 100vw;
  max-width: 100vw;
  top: 0;
  z-index: 98;
`;

const Nav = styled("nav")`
  display: flex;
  width: 100%;
  height: 15vh;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
`;

const Name = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  font-size: 2.7rem;
  color: inherit;
  align-items: center;

  @media (min-width: 550px) {
    margin-right: 10rem;
    font-size: 3rem;
  }
`;

const Logo = styled(Music)`
  width: 2.2rem;
  transition: color 0.3s ease-out;
  margin: 0.5rem;

  .shopName:hover & {
    color: #00adb5;
  }

  @media (min-width: 450px) {
    width: 2.5rem;
  }
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
    :hover {
      border-color: #00adb5;
    }
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <Nav>
        <Name className="shopName" to="/">
          hymn
          <Logo />
        </Name>

        <StyledLink to="/" exact activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/shop" activeClassName="active">
          Shop
        </StyledLink>
        <CartButton />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
