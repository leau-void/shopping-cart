import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  flex-wrap: wrap;
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
  placeholder: "Search Terms",
}))`
  outline: none;
  padding: 0.5rem;
  border-radius: 3px 0 0 3px;
  border: 0;
`;

const Submit = styled.button.attrs(() => ({
  type: "submit",
}))`
  border: 0;
  background: #00adb5;
  color: #eeeeee;
  border-radius: 0 3px 3px 0;
  padding: 0.5rem;
  cursor: pointer;
`;

const SearchForm = ({
  fetchInput,
  fetchAttrChange,
  searchNewProducts,
  input,
}) => {
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
        <Submit onClick={searchNewProducts}>Search</Submit>
      </SearchBar>
    </Form>
  );
};

export default SearchForm;
