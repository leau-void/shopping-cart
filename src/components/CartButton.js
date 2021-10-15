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

  &:hover {
    background: #00adb5;
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
