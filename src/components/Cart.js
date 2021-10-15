import React from "react";
import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import CartBg from "./CartBg";
import CartItem from "./CartItem";

const StyledCart = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: teal;
  position: fixed;
  z-index: 15;
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
    x: ["160vw", "0vw"],

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

const animation = keyframes`
0% {
  transform: rotateX(0deg)
}
50% {
  transform: rotateX(180deg)
}
100% {
  transform: rotateX(0deg)
}
`;

const animationRule = css`
  ${animation} 2s infinite alternate
`;

const RemoveButton = styled.button`
  border: 0;
  background: #222831;
  color: #eeeeee;
  padding: 5px;
  border-radius: 3px;

  &:hover {
    animation: ${animationRule};
  }
`;

const Cart = (props) => {
  const { cart, toggleCart, removeFromCartHandler } = props;
  const total = cart.reduce(
    (acc, currentItem) => acc + currentItem.collectionPrice,
    0
  );

  return (
    <>
      <MotionCart
        variants={cartVariant}
        initial="initial"
        animate="in"
        exit="out"
        key="cart"
        className="cart">
        {total}

        {cart.map((album, index) => (
          <CartItem key={index} {...album}>
            <RemoveButton onClick={() => removeFromCartHandler({ index })}>
              Remove
            </RemoveButton>
          </CartItem>
        ))}
        <CloseCartButton onClick={toggleCart}>X</CloseCartButton>
      </MotionCart>
      <CartBg key="bg" {...{ toggleCart }} />
    </>
  );
};

export default Cart;
