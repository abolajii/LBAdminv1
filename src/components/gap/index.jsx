import { colors } from "../../constants";
/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

const GapContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Bracket = styled.div`
  color: ${colors.darkColor};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

const Number = styled.p`
  color: ${colors.darkColor};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

const Gap = ({ text, number }) => {
  return (
    <GapContainer>
      <Title>{text}</Title>
      <div className="flex">
        <Bracket>(</Bracket>
        <Number>{number}</Number>
        <Bracket>)</Bracket>
      </div>
    </GapContainer>
  );
};

export default Gap;
