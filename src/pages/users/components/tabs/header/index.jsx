/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h2 {
    color: var(--space, #424243);
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid #eff2f5;
  }
`;

const Header = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default Header;
