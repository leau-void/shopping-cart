import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import { animationRuleOpenCartBg } from "../utils/animations";

const StyledBg = styled.div`
  height: 100vh;
  width: 100vw;
  background: #393e46aa;
  opacity: 0.4;
  position: fixed;
  left: 0;
  z-index: 10;
  animation: ${animationRuleOpenCartBg};

  &.closing-setup {
    animation: none;
  }

  &.closing {
    animation: ${animationRuleOpenCartBg};
    animation-direction: reverse;
  }
`;

const CartBg = ({ className }) => {
  const { toggleCart } = useContext(CartContext);

  return <StyledBg {...{ className }} onClick={toggleCart} />;
};

export default CartBg;
