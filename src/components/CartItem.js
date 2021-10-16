import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #00adb5;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  position: relative;
`;

const WrapColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: stretch;
`;

const Artwork = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 100px;
`;

const AlbumName = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ArtistName = styled.div`
  text-align: center;
`;

const ItemPrice = styled.div`
  align-self: center;
`;

const CartItem = ({ album, children }) => {
  const { artworkUrl100, collectionName, artistName, collectionPrice } = album;
  return (
    <StyledItem>
      <Artwork {...{ url: artworkUrl100 }} />
      <WrapColumn>
        <AlbumName>{collectionName}</AlbumName>
        <ArtistName>{artistName}</ArtistName>
      </WrapColumn>
      <WrapColumn>
        <ItemPrice>${collectionPrice}</ItemPrice>
        {children}
      </WrapColumn>
    </StyledItem>
  );
};

export default CartItem;
