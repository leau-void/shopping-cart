import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import {
  animationRuleOpenCartBg,
  animationRuleCloseCartBg,
} from "../utils/animations";

const StyledBg = styled.div`
  height: 100vh;
  width: 100vw;
  background: #393e46aa;
  opacity: 0.4;
  position: fixed;
  z-index: 10;
  animation: ${animationRuleOpenCartBg};

  &.closing {
    animation: ${animationRuleCloseCartBg};
  }
`;

const CartBg = ({ className }) => {
  const { toggleCart } = useContext(CartContext);

  return <StyledBg {...{ className }} onClick={toggleCart} />;
};

export default CartBg;
