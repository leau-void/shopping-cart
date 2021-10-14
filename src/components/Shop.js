import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import AlbumCard from "./AlbumCard";

const StyledShop = styled.div`
  padding: 1rem;
`;

const StoreFront = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5rem;
  padding: 1rem;
`;

const arr = [1, 2, 3, 4, 57, 7, 8];

const Shop = (props) => {
  const { products, addToCartHandler, searchFormHandlers, input } = props;
  return (
    <StyledShop>
      <SearchForm {...searchFormHandlers} input={input} />
      <StoreFront>
        {products.map((product, index) => (
          <AlbumCard
            key={index}
            {...{ album: product, addHandler: addToCartHandler, index }}
          />
        ))}
      </StoreFront>
    </StyledShop>
  );
};

export default Shop;
