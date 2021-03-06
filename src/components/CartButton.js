import React, { useContext } from "react";
import styled from "styled-components";
import { Bag } from "@styled-icons/bootstrap";
import CartContext from "../context/CartContext";

const CartIcon = styled(Bag)`
  width: 30px;
  height: 30px;
`;

const StyledCartButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 3px;
  background: lightgray;
  border: 0;
  position: relative;
  cursor: pointer;
  background: radial-gradient(#b9bec6 50%, #00adb5 50%);
  background-size: 200% 200%;
  background-position: 50% 50%;
  transition: background-position 0.5s linear;

  &:hover {
    background-position: -30% -30%;
    ::after {
      background: #b01414;
    }
  }

  ::after {
    position: absolute;
    bottom: -5px;
    right: -5px;
    background: #871d1d;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 0.8rem;
    color: white;
    content: "${(props) => props.itemQuantity}";
    transition: background 0.5s linear;
  }
`;

const CartButton = (props) => {
  const { cart, toggleCart } = useContext(CartContext);

  return (
    <StyledCartButton {...{ itemQuantity: cart.length }} onClick={toggleCart}>
      <CartIcon />
    </StyledCartButton>
  );
};

export default CartButton;
