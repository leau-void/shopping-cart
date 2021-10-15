import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CartBg from "./CartBg";
import CartItem from "./CartItem";

const StyledCart = styled(motion.div)`
  height: 100vh;
  width: 60vw;
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

const Item = styled(AlbumCard)``;

const RemoveButton = styled.button`
  border: 0;
  background: #222831;
  color: #eeeeee;
  padding: 5px;
  border-radius: 3px;
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
          <CartItem key={index} cart {...album}>
            <RemoveButton onClick={() => removeFromCartHandler({ index })}>
              Remove
            </RemoveButton>
          </CartItem>
        ))}
      </MotionCart>
      <CartBg key="bg" {...{ toggleCart }} />
    </>
  );
};

export default Cart;
