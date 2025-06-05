import { colors } from "../constants";
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  color: ${colors.textColor};
  font-size: 13px;
  font-weight: 400;
  line-height: 140%; /* 21px */
  letter-spacing: 0.5px;
`;

const CopyRight = () => {
  const year = new Date().getFullYear();
  return <Container> © {year} Lovebirdz</Container>;
};

export default CopyRight;
