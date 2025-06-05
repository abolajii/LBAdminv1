/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(98, 97, 99, 0.4);
  z-index: 2;
  backdrop-filter: blur(2.5px);
`;

const Modal = ({ children }) => {
  return <Container className="center">{children}</Container>;
};

export default Modal;
