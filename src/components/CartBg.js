import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBg = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: #393e46aa;
  opacity: 0.4;
  position: fixed;
  z-index: 10;
`;

const ForwardedBg = React.forwardRef((props, ref) => (
  <StyledBg ref={ref} {...props} />
));
const MotionBg = motion(ForwardedBg);

const bgVariant = {
  initial: {
    x: "-100vw",
    y: 0,
  },
  in: {
    x: ["-100vw", "0vw"],

    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  out: {
    x: "-100vw",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const CartBg = (props) => (
  <MotionBg
    onClick={props.toggleCart}
    variants={bgVariant}
    initial="initial"
    animate="in"
    exit="out"
  />
);

export default CartBg;
