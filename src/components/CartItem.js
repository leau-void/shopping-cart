import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 95%;
  max-width: 95%;
  min-height: 300px;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  background: rgba(0, 173, 181, 0.15);
  justify-content: flex-start;
  border-radius: 3px;
  align-items: center;
  position: relative;
`;

const WrapColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Artwork = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: min(30%, 150px);
`;

const AlbumName = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ArtistName = styled.div`
  text-align: center;
`;

const ItemPrice = styled.div`
  margin-top: auto;
  align-self: start;
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
