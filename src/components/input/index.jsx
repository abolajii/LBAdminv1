/* eslint-disable react/prop-types */
// import React from 'react'

import styled, { css } from "styled-components";

import { colors } from "../../constants";

const Container = styled.div`
  .error {
    color: red;
    font-size: 12px;
  }

  ${({ mb }) =>
    mb &&
    css`
      margin-top: 2rem;
    `}
`;

const InputContainer = styled.div`
  width: 100%;
  height: 55px;
  border: 1px solid #e8e6ea;
  border-radius: 15px;
  background-color: ${colors.white};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ error }) => {
    return (
      error &&
      css`
        margin-bottom: 5px;
        border: 1px solid red;
      `
    );
  }};

  input {
    height: 100%;
    width: 100%;
    padding: 0px 10px;
    flex: 1;
    font-family: "Lato", sans-serif;

    &::placeholder {
      font-family: "Lato", sans-serif;
    }
  }

  ${({ bg }) => {
    return (
      bg &&
      css`
        background-color: ${colors.bgSecondary};
        border: none;
      `
    );
  }}
`;

const Input = ({
  icon,
  left,
  children,
  error,
  placeholder,
  value,
  onChange,
  type,
  name,
  onBlur,
  mb,
  bg,
}) => {
  if (icon) {
    if (left) {
      return (
        <Container mb={mb}>
          {children}
          <InputContainer error={error}>
            <input
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
            />
          </InputContainer>
          {error && <p className="error">{error}</p>}
        </Container>
      );
    } else {
      return (
        <Container mb={mb}>
          <InputContainer error={error}>
            <input
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              type={type}
            />
            {children}
          </InputContainer>
          {error && <p className="error">{error}</p>}
        </Container>
      );
    }
  }
  return (
    <Container mb={mb}>
      <InputContainer error={error} bg={bg}>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
      </InputContainer>
      {error && <p className="error">{error}</p>}
    </Container>
  );
};

export default Input;
