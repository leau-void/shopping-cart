import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import AlbumCard from "./AlbumCard";
import { motion } from "framer-motion";

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

const AddCartButton = styled(motion.button)`
  padding: 0.5rem;
  border: 0;
  background: #393e46;
  color: #eeeeee;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
`;

const Shop = ({ products, addToCartHandler, searchFormHandlers, input }) => {
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
              animate={{
                x: [8, -6, 4, -2, 0],
                transition: { delay: 0.2, duration: 1 },
              }}
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
