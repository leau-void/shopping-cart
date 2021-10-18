import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Music } from "@styled-icons/crypto";
import { Link } from "react-router-dom";
import { animationRuleVisitShop } from "../utils/animations";

const StyledHome = styled(motion.div)`
  max-height: 70vh;
  height: 70vh;
  background: radial-gradient(circle, rgba(0, 173, 181, 1), #eeeeee 35%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: auto;
`;

const Logo = styled(Music)`
  width: 5rem;
  position: absolute;
  opacity: 0.5;
  z-index: -1;
`;

const StoreButton = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  background: #007980;
  color: #eeeeee;
  max-width: 80%;
  padding: 1rem 2rem;
  padding-right: 4rem;
  text-align: center;
  border: 2px solid #007980;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 3px;
  overflow-x: hidden;

  &:hover::after {
    position: absolute;
    padding-left: 1rem;
    content: "ᐳᐳ";
    font-weight: 700;
    animation: ${animationRuleVisitShop};
  }
`;

const LandingText = styled.h2`
  text-align: center;
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
      <Logo />
      <LandingText>
        Music is our passion.
        <br /> Let us share it with you.
      </LandingText>
      <StoreButton to="/shop">Find your next hymn</StoreButton>
    </MotionHome>
  );
};

export default Home;
