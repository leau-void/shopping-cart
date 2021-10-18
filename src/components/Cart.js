import React, { useContext } from "react";
import styled from "styled-components";
import CartBg from "./CartBg";
import CartItem from "./CartItem";
import CartContext from "../context/CartContext";
import { animationRuleOpenCart } from "../utils/animations";
import Animate from "../utils/Animate";

const StyledCart = styled("div")`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  padding: 5%;
  background: #222831;
  position: absolute;
  right: 0;
  z-index: 15;
  animation: ${animationRuleOpenCart};
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  &.closing-setup {
    animation: none;
  }

  &.closing {
    animation: ${animationRuleOpenCart};
    animation-direction: reverse;
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

const Title = styled.h2`
  border-radius: 3px;
  border-bottom: 2px solid #00adb5;
  padding: 2rem;
  padding-top: 0;
  text-align: center;
  margin: 1rem 0;
`;

const CartButton = styled.button`
  --main-color: #393e46;
  --hover-color: #00adb5;
  width: 80%;
  background: #393e46;
  background: linear-gradient(var(--main-color) 50%, var(--hover-color) 50%);
  background-size: 100% 220%;
  color: #eeeeee;
  border-radius: 3px;
  cursor: pointer;
  transition: background-position 0.2s ease-in-out;
  border: 3px solid var(--hover-color);
  align-self: center;
  padding: 0.7rem;
  font-size: 1.3rem;
  margin: 1rem 0;

  &:hover {
    background-position-y: 100%;
  }
`;

const CloseCartButton = styled(CartButton)`
  --hover-color: #b50800;
  font-weight: 400;
`;

const CheckoutButton = styled(CartButton)`
  font-weight: 500;

  &:hover {
    color: #222831;
  }

  &:active {
    --hover-color: #00f2ff;
  }
`;

const Total = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const RemoveButton = styled.button`
  border: 2px solid transparent;
  background: #393e46;
  color: #eeeeee;
  padding: 5px;
  border-radius: 3px;
  margin-inline-start: auto;
  transition: backgroung 0.6s linear;

  &:hover {
    background: #454b54;
    border-color: #393e46;
  }

  &:active {
    background: #222831;
  }
`;

const Cart = ({ doOpen }) => {
  const { cart, toggleCart, removeFromCartHandler } = useContext(CartContext);

  const total = cart
    .reduce((acc, currentItem) => acc + (currentItem.collectionPrice || 0), 0)
    .toFixed(2);

  return (
    <Animate {...{ doOpen, animationDuration: 700 }}>
      <StyledCart>
        <Title>Your shopping bag</Title>
        <div>
          {cart.map((album, index) => (
            <CartItem key={index} {...{ album }}>
              <RemoveButton onClick={() => removeFromCartHandler({ index })}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
        </div>

        <Total>Total: ${total}</Total>

        <CheckoutButton>Checkout</CheckoutButton>
        <CloseCartButton onClick={toggleCart}>Close</CloseCartButton>
      </StyledCart>
      <CartBg key="bg" />
    </Animate>
  );
};

export default Cart;
