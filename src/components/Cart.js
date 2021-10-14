import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCart = styled.div``;

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce(
    (acc, currentItem) => acc + currentItem.collectionPrice,
    0
  );
  return <StyledCart>{total}</StyledCart>;
};

export default Cart;
