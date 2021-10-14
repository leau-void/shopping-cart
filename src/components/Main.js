import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: start;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
