import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CartBg from "./CartBg";

const StyledCart = styled(motion.div)`
  height: 100vh;
  width: 40vw;
  background: teal;
  position: fixed;
  z-index: 15;
`;

const ForwardedCart = React.forwardRef((props, ref) => (
  <StyledCart ref={ref} {...props} />
));
const MotionCart = motion(ForwardedCart);

const cartVariant = {
  initial: {
    x: "100vw",
    y: 0,
  },
  in: {
    x: ["140vw", "60vw"],

    transition: {
      type: "tween",
      duration: 0.45,
    },
  },
  out: {
    x: "140vw",
    transition: {
      type: "tween",
      duration: 0.45,
    },
  },
};

const Cart = (props) => {
  const { cart, toggleCart } = props;
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
        key="cart">
        ayy
        {total}
      </MotionCart>
      <CartBg key="bg" {...{ toggleCart }} />
    </>
  );
};

export default Cart;
