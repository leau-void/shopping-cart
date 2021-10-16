import React, { useContext } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import AlbumCard from "./AlbumCard";
import { motion } from "framer-motion";
import CartContext from "../context/CartContext";
import {
  animationRuleAddToCartButtonEnter,
  animationRuleAddToCartButtonExit,
} from "../utils/animations";

const StyledShop = styled(motion.div)`
  padding: 1rem;
`;

const StoreFront = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5rem;
  padding: 1rem;
`;

const ForwardedShop = React.forwardRef((props, ref) => (
  <StyledShop ref={ref} {...props} />
));
const MotionShop = motion(ForwardedShop);

const shopVariant = {
  initial: {
    x: "100vw",
    y: 0,
  },
  in: {
    x: ["100vw", "0vw"],

    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  out: {
    x: "100vw",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const AddCartButton = styled.button`
  padding: 0.5rem;
  border: 0;
  background: #393e46;
  background: linear-gradient(#393e46 50%, #007980 50%);
  background-size: 100% 202%;
  color: #eeeeee;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  animation: ${animationRuleAddToCartButtonEnter};
  transition: background-position 0.3s linear;

  &:hover {
    background-position-y: 101%;
  }

  &.inCart {
    animation: ${animationRuleAddToCartButtonExit};
    background-position-y: 100%;
    transform-origin: bottom left;
    width: 160px;
  }
`;

const Shop = ({ products, searchFormHandlers, input }) => {
  const { checkIfInCart, addToCartHandler } = useContext(CartContext);
  return (
    <MotionShop
      variants={shopVariant}
      initial="initial"
      animate="in"
      exit="out"
      key="shop">
      <SearchForm {...searchFormHandlers} input={input} />
      <StoreFront>
        {products.map((product, index) => (
          <AlbumCard key={index} {...{ album: product }}>
            <AddCartButton
              className={checkIfInCart({ index }) ? "inCart" : ""}
              onClick={() => addToCartHandler({ index })}>
              Add to bag
            </AddCartButton>
          </AlbumCard>
        ))}
      </StoreFront>
    </MotionShop>
  );
};

export default Shop;
