import React, { useContext } from "react";
import styled from "styled-components";
import CartBg from "./CartBg";
import CartItem from "./CartItem";
import CartContext from "../context/CartContext";
import {
  animationRuleRemoveFromCartButton,
  animationRuleOpenCart,
  animationRuleCloseCart,
} from "../utils/animations";
import Animate from "../utils/Animate";

const StyledCart = styled("div")`
  height: fit-content;
  min-height: 100vh;
  width: 100vw;
  background: teal;
  position: absolute;
  z-index: 15;
  animation: ${animationRuleOpenCart};

  &.closing {
    animation: ${animationRuleCloseCart};
  }

  @media (min-width: 550px) {
    width: 60vw;
    border-radius: 0 0 0 5px;
  }
  @media (min-width: 1080px) {
    width: 40vw;
    border-radius: 0 0 0 5px;
  }
`;

const CloseCartButton = styled.button``;

const RemoveButton = styled.button`
  border: 0;
  background: #222831;
  color: #eeeeee;
  padding: 5px;
  border-radius: 3px;

  &:hover {
    animation: ${animationRuleRemoveFromCartButton};
  }
`;

const Cart = ({ doOpen }) => {
  const { cart, toggleCart, removeFromCartHandler } = useContext(CartContext);

  const total = cart
    .reduce((acc, currentItem) => acc + currentItem.collectionPrice, 0)
    .toFixed(2);

  return (
    <Animate {...{ doOpen, animationDuration: 700 }}>
      <StyledCart>
        {cart.map((album, index) => (
          <CartItem key={index} {...{ album }}>
            <RemoveButton onClick={() => removeFromCartHandler({ index })}>
              Remove
            </RemoveButton>
          </CartItem>
        ))}
        {total}

        <CloseCartButton onClick={toggleCart}>X</CloseCartButton>
      </StyledCart>
      <CartBg key="bg" />
    </Animate>
  );
};

export default Cart;
