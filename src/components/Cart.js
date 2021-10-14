import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledCart = styled(motion.div)``;

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce(
    (acc, currentItem) => acc + currentItem.collectionPrice,
    0
  );
  return (
    <StyledCart
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="shop">
      ayy
      {total}
    </StyledCart>
  );
};

export default Cart;
