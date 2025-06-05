// import React from "react";
/* eslint-disable react/prop-types */

import { FiChevronLeft } from "react-icons/fi";
import { colors } from "../../constants";
import styled from "styled-components";

const Container = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid #e8e6ea;
  border-radius: 15px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s;

  &:active {
    transform: scale(0.95); /* Example: reduce size on active */
  }

  /* Styles for :hover state */
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const GoBack = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <FiChevronLeft size={30} color="black" />
    </Container>
  );
};

export default GoBack;
