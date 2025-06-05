/* eslint-disable react/prop-types */
// import React from "react";
import { colors, font } from "../../../../constants";

import styled from "styled-components";

const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    height: 56px;
    justify-content: center;
    border-radius: 10px;

    font-family: ${font.lato};
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;

    &:disabled {
      cursor: not-allowed;
      background: #ded7d7;
      color: ${colors.white};
    }
  }

  .fill {
    background: ${colors.gradient};
    color: white;
  }
`;

const Button = ({ title, btnClick, fill }) => {
  return (
    <Container>
      <button className="w-100 my-3 fill" disabled={!fill} onClick={btnClick}>
        {title}
      </button>
    </Container>
  );
};

export default Button;
