/* eslint-disable react/prop-types */
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.img};
  margin-right: 9px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ImageContainer = ({ src }) => {
  return <Container>{src && <Image src={src} alt="img" />}</Container>;
};

export default ImageContainer;
