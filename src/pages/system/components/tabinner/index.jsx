/* eslint-disable react/prop-types */
import { colors } from "../../../../constants";
// import React from "react";
import styled from "styled-components";

const Background = styled.div`
  border-radius: 12px;
  background: ${colors.white};
  padding: 36px 26px;
  margin-top: 25px;
`;

const TabInner = ({ children }) => {
  return <Background>{children}</Background>;
};

export default TabInner;
