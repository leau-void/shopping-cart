import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  outline: 0;
  border: 2px solid #393e46;
  transition: border-color 0.2s;
  background: #eeeeee;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  margin: 0.5rem;

  &:active {
    border-color: #00adb5;
  }
`;

const Option = styled.option``;

const SearchBar = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Search Terms",
}))`
  outline: none;
  padding: 0.5rem;
  border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border: 0;
  border: 2px solid #393e46;
  border-right: 0;
  transition: border-color 0.2s;
  background: #eeeeee;

  &:focus {
    border-color: #00adb5;
  }
`;

const Submit = styled.button.attrs(() => ({
  type: "submit",
}))`
  border: 0;
  background: #00adb5;
  background: linear-gradient(90deg, #222831 50%, #00adb5 50%);
  background-size: 220% 100%;
  background-position-x: 99%;
  color: #eeeeee;
  border-radius: 0 3px 3px 0;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.2s linear;

  &:hover {
    background-position-x: 0%;
  }
`;

const SearchForm = ({
  fetchInput,
  fetchAttrChange,
  searchNewProducts,
  input,
}) => {
  return (
    <Form>
      <label style={{ margin: "0.5rem 0" }}>Search by</label>
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
