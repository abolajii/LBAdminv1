/* eslint-disable react/prop-types */
// import React from 'react'

import styled from "styled-components";

const ButtonContainer = styled.button`
  margin: ${({ m }) => `${m}px 0px`};
  width: 100%;
  height: 56px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ded7d7;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  ${({ width }) => {
    return width ? `width : ${width}` : null;
  }};
`;

const Button = ({ width, m, onClick, children }) => {
  return (
    <ButtonContainer width={width} onClick={onClick} m={m}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
