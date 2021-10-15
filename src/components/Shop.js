import React, { useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import SearchForm from "./SearchForm";
import AlbumCard from "./AlbumCard";
import { motion } from "framer-motion";
import CartContext from "../context/CartContext";

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

// animate={{
//                 x: [8, -6, 4, -2, 0],
//                 transition: { delay: 0.2, duration: 1 },
//               }}

const animation = keyframes`
  form {
    opacity: 1;
    transform: translate(0, 0)
  }

  to {
    opacity: 0;
    transform: translateY(-100vh) rotate(45deg);
  }
`;

const animationRule = css`
  ${animation} 1s ease-in normal forwards;
`;

const AddCartButton = styled.button`
  padding: 0.5rem;
  border: 0;
  background: #393e46;
  color: #eeeeee;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  &.inCart {
    animation: ${animationRule};
    transform-origin: bottom left;
    width: 180px;
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
