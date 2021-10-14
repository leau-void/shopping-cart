import { React } from "react";
import styled from "styled-components";
import { Bag } from "@styled-icons/bootstrap";

const CartIcon = styled(Bag)`
  width: 30px;
  height: 30px;
`;

const StyledCartButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 3px;
  background: lightgray;
  border: 0;
  position: relative;
  &:hover {
    background: grey;
  }
  ::after {
    position: absolute;
    bottom: 0;
    right: 0;
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 0.8rem;
    color: white;
    content: "${(props) => props.itemQuantity}";
  }
`;

const CartButton = (props) => (
  <StyledCartButton itemQuantity={props.itemQuantity} inputColor="blue">
    <CartIcon />
  </StyledCartButton>
);

export default CartButton;
