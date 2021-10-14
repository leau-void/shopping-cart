import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const SearchForm = (props) => {
  return (
    <Form>
      <input placeholder="Search..." />
      <label>Search by</label>
      <select>
        <option selected value="albumTerm">
          Album
        </option>
        <option value="artistTerm">Artist</option>
        <option value="songTerm">Song</option>
        <option value="genreIndex">Genre</option>
      </select>
    </Form>
  );
};

export default SearchForm;
