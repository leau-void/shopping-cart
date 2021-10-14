import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled.div`
  width: 200px;
  max-width: 200px;
  min-height: 300px;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  background: rgba(0, 173, 181, 0.15);
  justify-content: flex-start;
  border-radius: 3px;
  align-items: center;
`;

const Artwork = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 150px;
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

const AddCartButton = styled(motion.button)`
  padding: 0.5rem;
  border: 0;
  background: #393e46;
  color: #eeeeee;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
`;

const AlbumCard = (props) => {
  const { album, addHandler, index } = props;
  return (
    <StyledCard>
      <Artwork {...{ url: album.artworkUrl100 }} />
      <AlbumName>{album.collectionName}</AlbumName>
      <ArtistName>{album.artistName}</ArtistName>
      <ItemPrice>${album.collectionPrice}</ItemPrice>
      <AddCartButton
        animate={{ x: [5, -5, 0] }}
        onClick={(e) => addHandler(e, index)}>
        Add to bag
      </AddCartButton>
    </StyledCard>
  );
};

export default AlbumCard;
