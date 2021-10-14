import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHome = styled(motion.div)`
  background: red;
  position: relative;
  z-index: -1;
  order: 1;
`;

const ForwardedHome = React.forwardRef((props, ref) => (
  <StyledHome ref={ref} {...props} />
));
const MotionHome = motion(ForwardedHome);

const homeVariant = {
  initial: {
    x: "-100vw",
    y: 0,
  },
  in: {
    x: ["-100vw", "0vw"],
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.5,
    },
  },
  out: {
    x: "-100vw",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <MotionHome
      variants={homeVariant}
      initial="initial"
      animate="in"
      exit="out"
      key="home">
      Home
    </MotionHome>
  );
};

export default Home;
