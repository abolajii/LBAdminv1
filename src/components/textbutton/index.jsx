/* eslint-disable react/prop-types */
// import React from "react";

import GoBack from "../goback";
import { colors } from "../../constants";
import styled from "styled-components";

const Text = styled.p`
  margin-left: 30px;

  color: ${colors.black};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

const TextButton = ({ text, onClick }) => {
  return (
    <div className="flex ai-center">
      <GoBack onClick={onClick} />
      <Text className="">{text}</Text>
    </div>
  );
};

export default TextButton;
