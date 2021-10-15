import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHome = styled(motion.div)`
  background: red;
  height: 100vh;
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
