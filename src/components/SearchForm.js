import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const Option = styled.option``;

const SearchBar = styled.div`
  display: flex;
`;

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Search...",
}))`
  outline: none;
  padding: 0.5rem;
`;

const Submit = styled.button.attrs(() => ({
  type: "submit",
}))``;

const SearchForm = (props) => {
  const { fetchInput, fetchAttrChange, searchNewProducts, input } = props;
  return (
    <Form>
      <label>Search by</label>
      <Select defaultValue="albumTerm" onChange={fetchAttrChange}>
        <Option value="albumTerm">Album</Option>
        <Option value="artistTerm">Artist</Option>
        <Option value="songTerm">Song</Option>
        <Option value="genreIndex">Genre</Option>
      </Select>
      <SearchBar>
        <SearchInput value={input} onInput={fetchInput} />
        <Submit onClick={searchNewProducts}>Update my results</Submit>
      </SearchBar>
    </Form>
  );
};

export default SearchForm;
