import React from "react";
import styled from "styled-components";

const StyledItem = styled.div``;

const CartItem = (props) => {
  const { children } = props;
  return <StyledItem>{children}</StyledItem>;
};

export default CartItem;
