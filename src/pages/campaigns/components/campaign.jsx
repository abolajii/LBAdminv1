/* eslint-disable react/prop-types */
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Title = styled.h2`
  overflow: hidden;
  color: ${colors.textColor};
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
`;

const Body = styled.p`
  color: ${colors.textColor};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Campaign = ({ campaign }) => {
  return (
    <div className="flex flex-col">
      <Title>{campaign.title}</Title>
      <Body>{campaign.body}</Body>
    </div>
  );
};

export default Campaign;
