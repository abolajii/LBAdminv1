/* eslint-disable react/prop-types */
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Title = styled.p`
  color: ${colors.textColor};
  font-size: 15px;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
  margin-bottom: 15px;
`;

const ReasonBox = styled.div`
  width: 528px;
  min-height: 163px;
  flex-shrink: 0;
  border-radius: 15px;
  background: ${colors.bgSecondary};
  padding: 22px 15px;

  color: ${colors.black};
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;

const Reason = ({ reason }) => {
  return (
    <div>
      <Title>Reason</Title>
      <ReasonBox>{reason}</ReasonBox>
    </div>
  );
};

export default Reason;
