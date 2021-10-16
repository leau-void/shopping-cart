import React, { useContext } from "react";
import { motion } from "framer-motion";
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
  height: 100vh;
  width: 100vw;
  background: teal;
  position: fixed;
  z-index: 15;
  animation: ${animationRuleOpenCart};

  &.closing {
    animation: ${animationRuleCloseCart};
  }

  @media (min-width: 550px) {
    width: 60vw;
  }
  @media (min-width: 1080px) {
    width: 40vw;
  }
`;

const ForwardedCart = React.forwardRef((props, ref) => (
  <StyledCart ref={ref} {...props} />
));
const MotionCart = motion(ForwardedCart);

const cartVariant = {
  initial: {
    x: "160vw",
    y: 0,
  },
  in: {
    x: ["160vw", "40vw"],

    transition: {
      type: "tween",
      duration: 0.45,
    },
  },
  out: {
    x: "160vw",
    transition: {
      type: "tween",
      duration: 0.45,
    },
  },
};

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

  const total = cart.reduce(
    (acc, currentItem) => acc + currentItem.collectionPrice,
    0
  );

  return (
    <Animate {...{ doOpen, animationDuration: 500 }}>
      <StyledCart className="cart">
        {total}

        {cart.map((album, index) => (
          <CartItem key={index} {...album}>
            <RemoveButton onClick={() => removeFromCartHandler({ index })}>
              Remove
            </RemoveButton>
          </CartItem>
        ))}
        <CloseCartButton onClick={toggleCart}>X</CloseCartButton>
      </StyledCart>
      <CartBg key="bg" />
    </Animate>
  );
};

export default Cart;
