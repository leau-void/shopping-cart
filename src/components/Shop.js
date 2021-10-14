import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import AlbumCard from "./AlbumCard";
import { motion } from "framer-motion";

const StyledShop = styled(motion.div)`
  padding: 1rem;
  position: relative;
  z-index: -1;
  order: 50;
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
      duration: 1,
      delay: 0.5,
    },
  },
  out: {
    x: "100vw",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

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
          <AlbumCard
            key={index}
            {...{ album: product, addHandler: addToCartHandler, index }}
          />
        ))}
      </StoreFront>
    </MotionShop>
  );
};

export default Shop;
